import Image from "next/image"
import Layout from "../components/Layout"
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout
        pagina='Nosotros'
    >
        <main className="contenedor">
          <h2 className="heading">Nosotros</h2>

          <div className={styles.contenido}>

            <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="Imagen sobre Nosotros" />

            <div>
              <p>Aliquam eros ex, lobortis id risus sit amet, molestie pellentesque nisi. Maecenas sed rutrum neque. Praesent non quam at dui maximus ullamcorper commodo sit amet velit. Proin magna massa, euismod dignissim interdum eget, pharetra at risus. Duis suscipit magna eu felis pharetra cursus. Nullam commodo, nulla eget lobortis vehicula, massa purus placerat purus, in pharetra neque urna non odio. Vivamus molestie risus nec nisi fermentum efficitur. Nullam aliquet, eros a efficitur aliquet, arcu augue ultricies magna, eget interdum urna magna in turpis. Etiam sem diam, sodales nec aliquet at, commodo vitae ex. Mauris varius posuere enim, sed sollicitudin lacus interdum ac.
              </p>

              <p>Aliquam eros ex, lobortis id risus sit amet, molestie pellentesque nisi. Maecenas sed rutrum neque. Praesent non quam at dui maximus ullamcorper commodo sit amet velit. Proin magna massa, euismod dignissim interdum eget, pharetra at risus. Duis suscipit magna eu felis pharetra cursus. Nullam commodo, nulla eget lobortis vehicula, massa purus placerat purus, in pharetra neque urna non odio. Vivamus molestie risus nec nisi fermentum efficitur. Nullam aliquet, eros a efficitur aliquet, arcu augue ultricies magna, eget interdum urna magna in turpis. Etiam sem diam, sodales nec aliquet at, commodo vitae ex. Mauris varius posuere enim, sed sollicitudin lacus interdum ac.
              </p>
            </div>
          </div>
        </main>
    </Layout>
  )
}

export default Nosotros