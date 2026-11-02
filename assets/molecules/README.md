# Molecule sources for publication GIFs

Each subdirectory matches a `papers.bib` key whose preview is a rotating-molecule GIF.
The site thumbnail stays in `assets/img/publication_preview/`; this folder keeps the XYZ used to generate it (figures/PNGs omitted on purpose).

| Key                           | `structure.xyz`         | Notes                                                 |
| ----------------------------- | ----------------------- | ----------------------------------------------------- |
| `moreno2026rutam`             | RuTamOH                 | NBO geometry from Ru tamoxifen project                |
| `iribarren2026cisplatin`      | endoC + 2× cisplatin    | Host–guest cage in water                              |
| `cobas2025trem2`              | Varenicline             | PubChem CID 5310966 (illustrative ligand for the GIF) |
| `iribarren2025workflow`       | endoC ensemble          | Multi-frame XYZ (overlay GIF)                         |
| `iribarren2024cinchona`       | catalyst-sized organics | From earlier preview sidecar                          |
| `iribarren2024ionpair`        | small ion-pair model    | From earlier preview sidecar                          |
| `iribarren2023lewis`          | SN2 TS (6 atoms)        | Minimal model for the GIF                             |
| `iribarren2022conformational` | PTC conformer           | From earlier preview sidecar                          |
| `molecules2020halogen`        | iodotriazole + Cl⁻      | Halogen-bond scaffold                                 |
| `iribarren2019cations`        | pyridine–boronic dimer  | From earlier preview sidecar                          |

Regenerate a preview (example):

```bash
xyzrender assets/molecules/<key>/structure.xyz --gif-rot y --hy \
  --canvas-size 800 --background white --rot-frames 60 --gif-fps 12 \
  -go /tmp/<key>.gif
# then pad/resize into assets/img/publication_preview/<key>.gif as needed
```
