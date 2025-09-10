import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const productImages = [
  {
    src: "/lovable-uploads/c5e29a85-a8ce-487b-973c-1a3dd42367ff.png",
    alt: "Blocos de concreto empilhados - Alta qualidade e resistência"
  },
  {
    src: "/lovable-uploads/0a776755-5a54-4fe3-9aa6-3160fe94691b.png", 
    alt: "Blocos estruturais organizados - Perfeitos para construção"
  },
  {
    src: "/lovable-uploads/b496431a-639f-44dc-8001-f79c4acfff5a.png",
    alt: "Lajes pré-moldadas - Agilidade e qualidade na obra"
  },
  {
    src: "/lovable-uploads/9d7c5149-663e-4add-8c2c-4eac016e897c.png",
    alt: "Blocos circulares de concreto - Versatilidade construtiva"
  },
  {
    src: "/lovable-uploads/a46ba72b-7705-48b7-9eb1-ff633bddb212.png",
    alt: "Produção de blocos em larga escala - Qualidade garantida"
  },
  {
    src: "/lovable-uploads/69fdc186-7f50-4254-b0c7-3e0b7fa6c537.png",
    alt: "Diversos tipos de blocos - Soluções completas"
  },
  {
    src: "/lovable-uploads/1340edfd-d9d4-490c-bdcd-a6dfc165b09f.png",
    alt: "Blocos estruturais de alta resistência"
  },
  {
    src: "/lovable-uploads/c3ab2971-5dae-48be-b395-f20149ea7dad.png", 
    alt: "Lajes pré-moldadas prontas para instalação"
  },
  {
    src: "/lovable-uploads/a22600d3-73d6-4857-958e-a871a509d65f.png",
    alt: "Cimento e materiais de construção - Votoran"
  }
];

export function ProductCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  
  React.useEffect(() => {
    if (!api) {
      return;
    }

    // Auto-play functionality - advance every 3 seconds
    const autoPlay = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(autoPlay);
  }, [api]);

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Produtos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça nossa linha completa de blocos de concreto, lajes pré-moldadas e ferragens. 
            Qualidade comprovada desde 2019.
          </p>
        </div>
        
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {productImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="aspect-square relative overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-background/80 hover:bg-background border-primary/20 hover:border-primary text-primary hover:text-primary" />
          <CarouselNext className="right-4 bg-background/80 hover:bg-background border-primary/20 hover:border-primary text-primary hover:text-primary" />
        </Carousel>
        
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Navegação automática a cada 3 segundos • Use as setas para controle manual
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProductCarousel;