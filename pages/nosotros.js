import Image from "next/image"
import Layout from "../components/layout"
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
    return (
        <Layout
            title={'Nosotros'}
            description="Sobre Nosotros, GuitarLA, tienda de música"
        >
            <main className="contenedor">
                <h1 className="heading">Nosotros</h1>
                <div className={styles.contenido}>
                    <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros" />
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere metus lectus, sit amet sagittis mauris placerat rutrum. Curabitur egestas metus iaculis orci viverra, semper fermentum elit condimentum. Sed viverra commodo quam, ut tincidunt magna vulputate vitae. Quisque varius dictum turpis nec efficitur. Donec sed condimentum nisl. Phasellus ullamcorper est ut ante aliquam mattis.</p>
                        <p>Curabitur ut mollis erat, id hendrerit enim. Maecenas scelerisque massa id dui congue sollicitudin. Aliquam consectetur nisl ac iaculis interdum. Proin fringilla consequat posuere. Nullam aliquam orci in ipsum consequat, ac luctus risus ornare. Ut laoreet dui id bibendum congue. </p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}