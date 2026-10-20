// Galería por categorías, armada automáticamente desde las carpetas.
//
//   src/assets/galeria/
//     01-mesa-de-casamiento/   -> categoría "Mesa de casamiento"
//       foto-1.jpg
//       foto-2.jpg
//     02-copas-de-cristal/     -> categoría "Copas de cristal"
//       ...
//
// Para agregar fotos: copialas dentro de la carpeta de su categoría.
// Para crear una categoría nueva: creá una carpeta nueva y ponele fotos.
// El prefijo numérico (01-, 02-) solo sirve para ordenar y no se muestra.

export interface FotoCategoria {
  src: string;
  alt: string;
  categoriaId: string;
  categoriaNombre: string;
}

export interface Categoria {
  id: string;
  nombre: string;
  fotos: FotoCategoria[];
}

const archivos = import.meta.glob<string>('/src/assets/galeria/*/*.{jpg,jpeg,png,webp,avif,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const capitalizar = (texto: string) => texto.charAt(0).toUpperCase() + texto.slice(1);

// "01-mesa-de-casamiento" -> "Mesa de casamiento"
const nombreLegible = (carpeta: string) =>
  capitalizar(
    carpeta
      .replace(/^\d+[-_ ]*/, '')
      .replace(/[-_]+/g, ' ')
      .trim(),
  );

const esNombreGenerico = (nombre: string) => /^(foto|img|image|dsc|imagen)[-_ ]?\d*$/i.test(nombre);

const porCarpeta = new Map<string, FotoCategoria[]>();

for (const [ruta, url] of Object.entries(archivos).sort(([a], [b]) => a.localeCompare(b, 'es', { numeric: true }))) {
  const partes = ruta.split('/');
  const carpeta = partes[partes.length - 2];
  const archivo = partes[partes.length - 1].replace(/\.[^.]+$/, '');
  const categoriaNombre = nombreLegible(carpeta);

  const foto: FotoCategoria = {
    src: url,
    alt: esNombreGenerico(archivo) ? categoriaNombre : capitalizar(archivo.replace(/[-_]+/g, ' ')),
    categoriaId: carpeta,
    categoriaNombre,
  };

  porCarpeta.set(carpeta, [...(porCarpeta.get(carpeta) ?? []), foto]);
}

export const categorias: Categoria[] = [...porCarpeta.entries()]
  .sort(([a], [b]) => a.localeCompare(b, 'es', { numeric: true }))
  .map(([id, fotos]) => ({ id, nombre: nombreLegible(id), fotos }));

export const todasLasFotos: FotoCategoria[] = categorias.flatMap((c) => c.fotos);
