'use client'
import style from './products.module.scss'
import Image from 'next/image'
import shark from '@/../public/images/contact/shark.jpg'
import VideoSection from '../videoSection/VideoSection'
import qualityIcon from '@/../public/icons/products/qualityIcon.svg'
import toolsIcon from '@/../public/icons/products/tools.svg'
import rackIcon from '@/../public/icons/products/rackIcon.svg'
import MultiCarousel from '../multiItemCarousel/MultiCarousel'
import TitleSeparator from '../titleSeparator/TitleSeparator'
import Button from '../button/Button'

function Products() {
  return (
    <div className={style.container}>
      <VideoSection
        video={'./video/products/surfer.mp4'}
        title={'Nuestros Productos'}
        subtitle={'productos de  la mejor calidad en la región'}
      />
      <section className={style.advantages}>
        <div>
          <Image src={qualityIcon} width={50} height={50} alt='quality icon' />
          <p>
            Brindamos los mejores servicios respetando los estandares más altos
            de calidad para cumplir con las exigencias de nuestros clientes.
          </p>
        </div>
        <div>
          <Image src={toolsIcon} width={50} height={50} alt='tools icon' />
          <p>
            Nuestros productos son hechos con los mejores materiales para
            garantizar la resistencia y durabilidad.
          </p>
        </div>
        <div>
          <Image src={rackIcon} width={50} height={50} alt='rack icon' />
          <p>
            Nuestros productos se realizan de acuerdo a tus medidas y
            necesidades brindando un servicio personalizado.
          </p>
        </div>
      </section>

      {/* RACK SELECTIVO */}
      <div className={style.principalProduct}>
        <section className={style.principalProductTextSection}>
          <p className={style.subtitle}>
            <em>Solución ideal para bodegas de almacén.</em>
          </p>
          <h2>Rack Selectivo carga pesada </h2>
          <p className={style.principalProductText}>
            Experimenta el poder del almacenamiento con nuestro robusto rack
            selectivo, con capacidades que van desde 800 kg hasta 3.5 toneladas
            por nivel. Es el sistema predilecto en el manejo de productos
            entarimados o de mucho peso, permitiendo distribuirlos según las
            características específicas de la bodega, superficie y alturas, para
            lograr la máxima eficiencia de almacenamiento. Además, la opción de
            combinarlo con rack picking y la posibilidad de colocarlos de doble
            fondo maximizan aún más el aprovechamiento de espacios.
            <br /> <br />
            La versatilidad se destaca por su capacidad modular, adaptándose sin
            esfuerzo a cualquier espacio. Este rack es ideal para gestionar
            diversos tipos de materiales, brindando un soporte esencial para el
            manejo de inventarios en almacenes y contribuyendo a mantener bajos
            costos operativos, asegurando que tus materias primas o productos se
            conserven en óptimo estado. Descubre una nueva dimensión en el
            almacenamiento de carga pesada.
          </p>
          <Button className={style.btn}>cotizar</Button>
          <div>
            <section className={style.capacityContainer}>
              <div>
                <p>1000+</p>
                <p>
                  <em>unidades vendidas</em>
                </p>
              </div>

              <div>
                <p>3.5 ton</p>
                <p>
                  <em> capacidad maxima</em>
                </p>
              </div>
            </section>
          </div>
        </section>
        <div className={style.imageContainer}>
          <Image className={style.img} src={shark} alt='rack' fill />
        </div>
      </div>

      <section className={style.secondaryProducts}>
        {/* RACK PICKING */}
        <main className={style.rackPicking}>
          <div className={style.titleAndImage}>
            <section className={style.titleSection}>
              <p>
                <em>
                  Descubre la flexibilidad sin límites con nuestro rack picking
                  .
                </em>
              </p>
              <h2>Rack Picking</h2>
            </section>

            <section className={style.secondaryMainImgContainer}>
              <Image src={shark} alt='rack picking' fill />
            </section>
          </div>

          <div className={style.secondaryMainText}>
            <p>
              Descubre la eficiencia en el almacenamiento con nuestro rack
              picking diseñado para cargas de 400 a 750 kg por nivel, perfecto
              para el manejo manual de productos o cajas, este rack ofrece
              comodidad y facilidad en la identificación de productos.
            </p>

            <p>
              Adáptalo a tus necesidades específicas con opciones de nivel
              metálico, o nivel de aglomerado o melamina. Con medidas que van
              desde 1.20 m hasta 3.00 m de frente, de 0.60 m hasta 1.20 m de
              fondo, y alturas que oscilan entre 1.80 m y 3.60 m, este producto
              se ajusta a diferentes espacios de almacenamiento.
            </p>
            <p>
              Este rack es más que un sistema de almacenamiento; es una solución
              personalizada para cualquier negocio. Su diseño modular y opciones
              de personalización hacen que sea la elección ideal para adaptarse
              a las cambiantes necesidades de tu operación.
            </p>

            <Button
              style={{ margin: '0', background: 'white', border: 'none' }}
              className={style.btn}
            >
              cotizar
            </Button>
          </div>
        </main>

        {/* MEZZANINE */}
        <div className={style.mezzanine}>
          <div className={style.mezzanineMainText}>
            <section className={style.firstSection}>
              <p>
                El mezzanine, también conocido como entrepiso o tapanco,
                representa un sistema de almacenamiento inteligente que optimiza
                la capacidad de tu almacén o bodega, duplicando o triplicando la
                capacidad de almacenamiento al aprovechar la altura útil del
                espacio disponible.
              </p>

              <p>
                El primero, construido con estructura metálica, es ideal para
                proyectar un segundo piso en casos donde los productos a
                almacenar son de gran volumen, como maquinaria, refacciones u
                artículos que tienen movimientos menos frecuentes en la bodega.
              </p>
            </section>

            <section className={style.secondSection}>
              <p>
                El segundo tipo de mezzanine se sustenta en nuestro rack
                selectivo de carga pesada, siendo perfecto para el
                almacenamiento de productos controlados. Este tipo de mezzanine
                puede soportar dos o tres niveles según las necesidades.
              </p>

              <p>
                No solo duplica o triplica la superficie de almacenamiento de
                forma vertical, sino que al utilizar nuestro rack selectivo como
                base, se convierte en un sistema completamente desarmable y
                reutilizable. Dependiendo del tipo de mezzanine y su uso
                previsto, recomendamos la implementación de elevadores
                industriales para facilitar el manejo eficiente de los
                productos.
              </p>
            </section>

            <Button className={style.btn}>cotizar</Button>
          </div>
          <div className={style.mezzanineTitleAndImage}>
            <section className={style.mezzanineTitleSection}>
              <p>
                <em>
                  Ideal para maximizar la eficiencia y la capacidad de
                  almacenamiento en espacios reducidos .
                </em>
              </p>
              <h2>Mezzanine</h2>
            </section>

            <section className={style.mezzanineMainImgContainer}>
              <Image src={shark} alt='rack picking' fill />
            </section>
          </div>
        </div>

        {/* ANAQUEL */}
        <div className={style.anaquel}>
          <div className={style.anaquelTextAndTitle}>
            <div className={style.anaquelText}>
              <h3>Anaquel sin tornillos</h3>
              <p>
                Esta opción se destaca por su adaptabilidad a diversas
                situaciones de almacenaje, con niveles que pueden variar según
                las necesidades específicas de cada caso. La versatilidad es
                clave, ya que los niveles pueden ser metálicos, galvanizados,
                parrillas metálicas, madera, melamina o triplay. Además, este
                anaquel ofrece la ventaja de ser fácilmente desarmable e
                intercambiable, brindando una flexibilidad inigualable en la
                organización del espacio. Una elección práctica y eficiente para
                maximizar el almacenamiento en entornos donde la carga y
                descarga se realiza de forma manual.
              </p>
            </div>
            <section className={style.anaquelTitle}>
              <p>
                <em>
                  Una solución flexible para negocios donde la carga no supera
                  los 200 kg por nivel y el almacenamiento se realiza
                  manualmente.
                </em>
              </p>
              <h2>Anaqueles</h2>
              <Button className={style.btn}>cotizar</Button>
            </section>
          </div>

          <div className={style.anaquelImageAndText}>
            <section className={style.anaquelImgContainer}>
              <Image src={shark} alt='rack picking' fill />
            </section>

            <section className={style.anaquelText}>
              <h3>Anaquel sin tornillos tipo AP</h3>
              <p>
                Nuestro anaquel totalmente metálico tipo AP redefine la
                practicidad y la eficiencia. Libre de tornillos y con un montaje
                simple que te permite armar tu estante en tan solo 5 minutos,
                este producto versátil se convierte en la opción perfecta para
                optimizar diversos espacios, desde archivos y almacenes de
                productos terminados hasta refaccionarias, dulcerías, abarrotes,
                y más. Con opciones de niveles metálicos, rejillas o paneles,
                puedes personalizar tu anaquel según las necesidades específicas
                de tu espacio. Además, su diseño modular no solo mejora la
                gestión de inventarios, sino que también contribuye a reducir
                costos. Nos adaptamos a cualquier espacio, y si necesitas
                medidas especiales, ¡también podemos fabricarlas para ajustarnos
                perfectamente a tus requerimientos! Lleva la eficiencia al
                siguiente nivel, haz que cada rincón de tu espacio cuente con
                nuestro anaquel metálico tipo AP.
              </p>
            </section>
          </div>
        </div>

        {/* ESTANTERIAS */}
        <div className={style.estanterias}>
          <div className={style.estanteriaImageContainer}>
            <Image
              className={style.estanteriaImg}
              src={shark}
              alt='rack'
              fill
            />
          </div>

          <section className={style.estanteriaTextSection}>
            <p className={style.subtitle}>
              <em>
                Nuestra estantería con tornillos ofrece la solución más
                económica y eficiente para el almacenaje de cargas menores a 85
                kg por nivel.
              </em>
            </p>
            <h2>Estanteria con tornillos </h2>
            <p className={style.estanteriaProductText}>
              Con dimensiones flexibles que abarcan anchos de 30 cm a 45 cm y
              longitudes de 60 cm, 80 cm y 90 cm, junto con postes de hasta 2.40
              m de altura, esta estantería se adapta perfectamente a las
              necesidades de organización en ferreterías, abarroterías o
              archivos muertos de negocios. Fabricada con lámina de la más alta
              calidad en calibre 22, nuestra estantería metálica con tornillos
              ofrece durabilidad y resistencia. Una opción confiable y accesible
              para optimizar el espacio de almacenamiento en tu negocio.
            </p>
            <Button
              className={style.btn}
              style={{ background: 'white', border: 'none' }}
            >
              cotizar
            </Button>
          </section>
        </div>
      </section>

      <TitleSeparator title='Otros de nuestros productos' />
      <MultiCarousel />
    </div>
  )
}

export default Products
