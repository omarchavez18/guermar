import Image from 'next/image'
import style from './service.module.scss'
import shark from '@/../public/images/contact/shark.jpg'

const Service = () => {
  return (
    <div className={style.container}>
      <section className={style.titleContainer}>
        <p>
          <em>Nuestros servicios</em>
        </p>
        <h1>
          Ofrecemos diversos servicios
          <br /> para satisfacer tus necesidades
        </h1>
      </section>

      <div className={style.mainContainer}>
        <section className={style.servicesContainer}>
          <div className={style.firstSection}>
            <div className={style.service1}>
              <p className={style.title}>Mantenimiento de rack</p>
              <p className={style.text}>
                Renovamos la estética de tus racks con nuestro servicio de
                mantenimiento. Dale un nuevo aspecto a tus racks usados mediante
                la aplicación de un segundo acabado de pintura. Además, nos
                ocupamos de reparar piezas dañadas por golpes, como el cambio de
                botas protectoras, la sustitución de largueros dañados, y la
                reparación de asnillos golpeados. Recupera la funcionalidad y el
                atractivo visual de tus racks con nuestro servicio integral de
                mantenimiento.
              </p>
            </div>
            <div className={style.service2}>
              <p className={style.title}>Instalación y reubicación de rack</p>
              <p className={style.text}>
                ¿Tu bodega se ha quedado pequeña? ¿Estás en busca de un nuevo
                espacio para tu almacén? Nosotros te brindamos apoyo completo,
                desde el desmontaje de tu rack hasta su armado en tu nueva
                ubicación. Hacemos que el traslado sea eficiente y sin
                complicaciones para que puedas optimizar tu espacio de
                almacenamiento sin preocupaciones.
              </p>
            </div>
          </div>

          <div className={style.secondSection}>
            <div className={style.service3}>
              <p className={style.title}>Sustitución de piezas</p>
              <p className={style.text}>
                ¿Sientes que tu espacio actual ya no se ajusta a tus necesidades
                y estás pensando en realizar un cambio en el diseño? En Guermar,
                estamos aquí para guiarte en el rediseño de tu espacio y
                reorganizar tus racks existentes. Nos aseguramos de que cada
                ajuste mejore el flujo y la eficiencia, adaptándonos a tus
                nuevos requisitos. Transformemos juntos tu espacio para
                maximizar su potencial
              </p>
            </div>
            <div className={style.service4}>
              <p className={style.title}>Maquilado de pintura</p>
              <p className={style.text}>
                ¿Buscas asistencia para pintar tus piezas metálicas con pintura
                electrostática? En Guermar, disponemos de un horno con capacidad
                para hasta 2 toneladas por lote. Acércate a nosotros y logra el
                acabado perfecto que buscas para tus piezas metálicas. Estamos
                aquí para satisfacer tus necesidades de recubrimiento con
                calidad y precisión.
              </p>
            </div>
          </div>

          <div className={style.thirdSection}>
            <div className={style.service5}>
              <p className={style.title}>Maquila de corte y dobles</p>
              <p className={style.text}>
                ¿Enfrentas algún problema con tu maquinaria justo cuando
                necesitas entregar mercancía de forma urgente? Nosotros estamos
                aquí para apoyarte con nuestros servicios de maquilado,
                ofreciendo corte y doblez de lámina desde calibre 22 hasta placa
                de 1/4 pulgada. Aseguramos soluciones rápidas y precisas para
                que puedas cumplir con tus compromisos de entrega sin
                contratiempos.
              </p>
            </div>
            <div className={style.service6}>
              <p className={style.title}>Asesoría en logística</p>
              <p className={style.text}>
                ¿Buscas optimizar tus procesos productivos y necesitas la
                experiencia de un especialista en productividad? Estamos aquí
                para ayudarte a perfeccionar la logística de tu almacén y
                potenciar la eficiencia en la productividad de tu planta.
                Contamos con soluciones adaptadas a tus necesidades para
                impulsar tu operación al siguiente nivel, cómo por ejemplo,
                rediseñar tu espacio y a acomodar tus rack existentes para que
                el flujo mejore.
              </p>
            </div>
          </div>
        </section>

        <section className={style.imageContainer}>
          <Image className={style.img} src={shark} alt='rack' fill />
        </section>
      </div>
    </div>
  )
}

export default Service
