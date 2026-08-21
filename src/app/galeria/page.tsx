import { Container, Section } from "@/components/ui/Card";
import { ImageSlot } from "@/components/media/ImageSlot";

const galeriaItems = [
  { id: 1, name: "Evento 1", filename: "galeria1.jpg" },
  { id: 2, name: "Evento 2", filename: "galeria2.jpg" },
  { id: 3, name: "Evento 3", filename: "galeria3.jpg" },
  { id: 4, name: "Evento 4", filename: "galeria4.jpg" },
  { id: 5, name: "Evento 5", filename: "galeria5.jpg" },
  { id: 6, name: "Evento 6", filename: "galeria6.jpg" },
];

export default function GaleriaPage() {
  return (
    <>
      {/* Header */}
      <Section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <Container>
          <h1 className="text-5xl font-bold mb-4">Galería</h1>
          <p className="text-xl text-blue-100">
            Momentos capturados de nuestras actividades
          </p>
        </Container>
      </Section>

      {/* Galería Grid */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galeriaItems.map((item) => (
              <div key={item.id} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <ImageSlot
                  alt={item.name}
                  width={400}
                  height={300}
                  filename={item.filename}
                  category="imagenes/galeria"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-slate-50 rounded-lg">
            <p className="text-slate-600 mb-2">
              ¿Tienes fotos de nuestras actividades?
            </p>
            <p className="text-sm text-slate-500">
              Envíanos tus fotos a:{" "}
              <a
                href="mailto:fundacionafectoyefecto@gmail.com"
                className="font-semibold text-blue-600 hover:underline"
              >
                fundacionafectoyefecto@gmail.com
              </a>
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
