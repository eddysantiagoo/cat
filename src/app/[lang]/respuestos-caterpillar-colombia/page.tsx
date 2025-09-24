import { Button } from "@/components/ui/button"
import { Chrome } from "lucide-react"
import Hero from "@/components/hero"
import FAQ from "@/components/faq"
import { getDictionary } from '@/i18n/get-dictionary'
import type { Locale } from '@/i18n/config'
import Image from "next/image"
import { Card } from "@/components/ui/card"

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)

  return (
    <main className="flex flex-col items-center w-full">
      <Hero lang={lang} />
      
      {/* ¿Por qué comprar repuestos originales? */}
      <section className="w-full py-12 md:py-20 bg-background">
        <div className="container px-4 md:px-6 grid gap-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">¿Por qué comprar Repuestos Cat originales?</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-3 text-sm md:text-base text-muted-foreground">
              <ul className="list-disc pl-5 space-y-2">
                <li>Diseñados y probados según estándares Cat para máximo desempeño.</li>
                <li>Mayor vida útil, confiabilidad y garantía de compatibilidad.</li>
                <li>Disponibilidad nacional y respaldo técnico especializado.</li>
                <li>Protegen la inversión y reducen paradas no programadas.</li>
              </ul>
            </div>
            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
              <Image src="/images/1.png" alt="Repuestos Cat" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios de usar originales */}
      <section className="w-full py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <h3 className="text-2xl font-semibold text-center mb-8">Beneficios de usar repuestos originales Cat</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: 'Rendimiento y seguridad', d: 'Piezas diseñadas para trabajar en condiciones exigentes manteniendo el desempeño y la seguridad de tu máquina.' },
              { t: 'Disponibilidad y respaldo', d: 'Cadena de suministro y soporte de especialistas para asegurar continuidad operativa.' },
              { t: 'Costo total optimizado', d: 'Mayor duración y menor riesgo de falla reducen el costo total de propiedad.' },
            ].map((item, i) => (
              <Card key={i} className="p-6">
                <h4 className="font-medium mb-2">{item.t}</h4>
                <p className="text-sm text-muted-foreground">{item.d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categorías destacadas */}
      <section className="w-full py-12 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <h3 className="text-2xl font-semibold text-center mb-10">Líneas de repuestos</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Herramientas de corte', desc: 'Soluciones para desgaste y corte que maximizan productividad en frente de trabajo.' },
              { title: 'Tren de rodaje', desc: 'Componentes para excavadoras y tractores que aseguran tracción y estabilidad.' },
              { title: 'Componentes hidráulicos', desc: 'Mangueras, sellos y componentes que mantienen la presión y eficiencia del sistema.' },
              { title: 'Repuestos electrónicos', desc: 'Sensores, módulos y arneses para control y diagnóstico confiable.' },
              { title: 'Motor y tren de potencia', desc: 'Partes para motores, transmisiones y diferencial con estándares Cat.' },
              { title: 'Filtros y fluidos', desc: 'Protección superior contra contaminantes y desgaste prematuro.' },
            ].map((c, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="relative h-40 bg-muted">
                  <Image src="/images/1.png" alt={c.title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <h4 className="font-medium">{c.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{c.desc}</p>
                  <Button className="mt-3" size="sm" variant="secondary">Conocer más</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cobertura nacional */}
      <section className="w-full py-12 md:py-20">
        <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
            <Image src="/images/1.png" alt="Cobertura nacional" fill className="object-contain" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Cobertura nacional</h3>
            <p className="text-sm md:text-base text-muted-foreground">Atención a nivel nacional con puntos de servicio, inventario y logística para llegar a tus operaciones donde estés. Soporte técnico y asesoría para seleccionar el repuesto adecuado.</p>
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <FAQ lang={lang} />

      {/* CTA 1 - estilo fondo negro con imagen + texto + botón */}
      <section className="w-full bg-black text-white py-14 md:py-20">
        <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="relative mx-auto w-full max-w-md aspect-[4/3]">
            <Image src="/images/1.png" alt="Compra repuestos en línea" fill className="object-contain" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-yellow-400">
              Compra repuestos Cat en línea con Gestor de Partes
            </h3>
            <p className="mt-3 text-base md:text-lg text-gray-200 max-w-prose">
              Adquiere repuestos Cat originales para tu maquinaria desde cualquier lugar de Colombia, de forma rápida y segura. Simplifica el mantenimiento con nuestro catálogo digital y soporte especializado.
            </p>
            <Button className="mt-6 bg-yellow-400 text-black hover:bg-yellow-300">
              ¡Compra repuestos Cat en línea!
            </Button>
          </div>
        </div>
      </section>

      {/* CTA 2 - franja amarilla con botón */}
      <section className="w-full bg-yellow-400 py-10">
        <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="flex items-center gap-5">
            <div className="relative h-24 w-24 md:h-28 md:w-28 flex-shrink-0">
              <Image src="/images/1.png" alt="Promociones" fill className="object-contain" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-black/80 font-semibold">Promociones</p>
              <h4 className="text-2xl md:text-3xl font-extrabold text-black">¡Compra más, ahorra más!</h4>
              <p className="text-sm text-black/80">Ingresa para conocer nuestros precios especiales en repuestos y accesorios.</p>
            </div>
          </div>
          <div className="flex md:justify-end">
            <Button className="bg-black text-white hover:bg-black/80">Obtener</Button>
          </div>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {dict.home.cta.title}
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {dict.home.cta.description}
            </p>
            <Button size="lg" className="mt-4">
              <Chrome className="mr-2 h-5 w-5" />
              {dict.home.cta.button}
            </Button>
          </div>
        </div>
      </section>

      
    </main>
  )
}
