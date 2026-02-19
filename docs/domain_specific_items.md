

# DOMAIN SPECIFIC TERMS

**FLEX:**

- used multple alms at the same time to reaon and reduce hallucinations and biasness
- 

____

**STACK**:

- polars, scipy, numpy, pandas
- typescript, three.js, vite, lil-gui

____

#### Why Use FASTA?

In bioinformatics, FASTA is the general name for the text-based format that represents either nucleotide or peptide sequences using single-letter codes. Because "FASTA" is a broad category, researchers often use specific extensions to indicate the type of data inside without needing to open the file: 

- **.fna**: FASTA **N**ucleic **A**cid (DNA/RNA).
- **.faa**: FASTA **A**mino **A**cid (Proteins).
- **.ffn**: FASTA **F**ormat **N**ucleotide of gene regions (coding regions).
- **.frn**: FASTA **R**NA for **N**on-coding RNA regions.
- **.fasta / .fa**: Generic extensions used for any FASTA-formatted data. 

<span style='Color:red; font-weight:bold;'> connect API to fetch data </span>

- **GCA (GenBank Assembly):** These are original submissions to the International Nucleotide Sequence Database Collaboration (INSDC). For GRCh38.p14, GCA_000001405.29 is the latest submitted version from the [Genome Reference Consortium](https://www.ncbi.nlm.nih.gov/assembly/GCA_000001405).
- **GCF (RefSeq Assembly):** These are NCBI-derived copies of GCA assemblies. NCBI "promotes" certain GenBank genomes to RefSeq status to provide a standardized, curated reference. GCF_000001405.40 is the RefSeq counterpart to the GCA version. 

___

# VISUALIZATION



using `vite` along with `typescript` and `three.js` to make a professional dashboard.

### Why use Vite?

Vite uses a different strategy:

- **Native ES Modules (ESM):** Instead of bundling, Vite serves your files directly to the browser. The browser does the work of linking them together. This makes the "Cold Start" of your dev server almost instant (under 300ms).
- **Hot Module Replacement (HMR):** When you change a line in your `main.ts`, Vite only replaces that one file in the browser. In Three.js, this means your 3D scene can update **without a full page refresh**, often keeping your camera position and current state intact.
- **Optimized Production:** For GitHub Pages, Vite uses a tool called **Rollup** to crush your code into the smallest, fastest possible files.

#### The Two Parts of Vite

Vite isn't just one tool; it's a "two-in-one" package:

1. **The Dev Server:** This is what you use while coding (`npm run dev`). It provides the instant feedback loop and the "Live Preview" in VS Code.
2. **The Build Command:** This is what you use for deployment (`npm run build`). It prepares your project for GitHub Pages by turning your TypeScript and 3D assets into a static `dist/` folder.

____

### Why use `.bin` filetype for visualization?

**Zero parsing overhead** — raw bytes map directly to `Float32Array`, no deserialization step

**Smallest file size** — no metadata, headers, or schema overhead, just the numbers

**Three.js native** — `BufferGeometry` attributes expect typed arrays, so the data goes straight to the GPU with no conversion

___



- use `simple preview` `cmd + shift + p` in vs code/cursor/kiro



**TODO:**

1. Add bin to the data >>> display the bin on the tooltip
2. add about page
   1. flow chart of the entire process
3. add hyysprk logo & github at the bottom left
4. deploy the app on github pages