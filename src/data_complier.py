'''
This script complies the downstream processed data into a high performance
parquet file. This script serves as a segway into data visualization from 
pure data processing and systmes biology analysis.
'''

# import libraries
import numpy as np
import polars as pl
import polars.selectors as cs

# load the data
surface = np.load('../data/processed/surface_coords_scaled.npy')
dist = np.load('../data/processed/x_y_z_dist_surf.npy')
gc = np.load('../data/processed/x_y_z_bin_gc.npy', allow_pickle=True)
com = np.load('../data/processed/x_y_z_dist_com_dist_rm.npy')

# combining data & creating polars schema/object type
dist_schema = pl.from_numpy(
    dist, 
    schema={
        'x': pl.Float32, 
        'y': pl.Float32, 
        'z': pl.Float32, 
        'dist_surf': pl.Float32
    }
)
gc_schema = pl.from_numpy(
    np.float32(gc[:,-1]), 
    schema={'gc_content': pl.Float32}
)
com_schema = pl.from_numpy(
    com[:, -2:], 
    schema={
        'dist_com': pl.Float32, 
        'dist_rm': pl.Float32
    }
)

combined_df = pl.concat(
    [dist_schema, gc_schema, com_schema], 
    how="horizontal"
)

combined_df = combined_df.with_columns(
    [
        pl.col("dist_surf").round(5),
        pl.col("gc_content").round(5),
        pl.col("dist_com").round(5),
        pl.col("dist_rm").round(5)
    ]
)

surface_df = pl.from_numpy(
    surface,
    schema = {
        "x": pl.Float32,
        "y": pl.Float32,
        "z": pl.Float32
    }
).with_columns(
    cs.float().round(7)
)

# creating-exporting parquet files

combined_df_output_path = '../data/processed/combined_df.parquet'
surface_df_output_path = '../data/processed/surfacedf.parquet'

combined_df.write_parquet(combined_df_output_path)
surface_df.write_parquet(surface_df_output_path)
