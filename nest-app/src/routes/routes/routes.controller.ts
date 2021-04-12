import { Controller, Get } from '@nestjs/common';

@Controller('routes')
export class RoutesController {

    @Get()
    index() {
        return [
            { 
                title: 'First Position', 
                image: 'https://i2.wp.com/blog.fluencypass.com/wp-content/uploads/2017/03/Malta-mapa.png?fit=1682%2C1229&ssl=1',
                location: 'Europe and North Afric',
                startPosition: { 
                    latitude: 36.1293733, 
                    longitude: -5.3542017 
                }, 
                endPosition: {
                    latitude: 36.1265515, 
                    longitude: -5.353279 } 
            },
            { 
                title: 'Second Position', 
                image: 'https://www.google.com/maps/d/thumbnail?mid=106FZ2F3pHnftOopchoooeNfOXI4',
                location: 'Hawaii',
                startPosition: { 
                    latitude: 36.1247512, 
                    longitude: -5.3506746 
                }, 
                endPosition: { 
                    latitude: 36.1229308, 
                    longitude: -5.3515203 
                } 
            },
            { 
                title: 'Third Position', 
                image: 'https://arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/2GW73SA6CTYFE4H4BKUTUCYUSQ.jpg',
                location: 'Amazonia - burns area',
                startPosition: { 
                    latitude: 19.4560666, 
                    longitude: -155.1715115 
                }, 
                endPosition: { 
                    latitude: 19.4309375, 
                    longitude: -155.2716884 
                } 
            },
            { 
                title: 'Fourth Position', 
                image: 'https://jpimg.com.br/uploads/2017/04/628757302-agencia-meteorologica-do-japao-disse-que-o-terremoto-aconteceu-perto-das-6h-da-manha-em-uma-profundi.jpg',
                location: 'Japan',
                startPosition: { 
                    latitude: 25.7770772, 
                    longitude: -80.2259834  
                }, 
                endPosition: { 
                    latitude: 25.7750676, 
                    longitude: -80.2011354 
                } 
            },
            { 
                title: 'Fifth Position', 
                image: 'https://viagemeturismo.abril.com.br/wp-content/uploads/2016/10/vancouver.jpeg?quality=70&strip=info&w=925',
                location: 'Canada',
                startPosition: { 
                    latitude: 36.1265515, 
                    longitude: -5.353279 
                }, 
                endPosition: {
                    latitude: 36.1293733, 
                    longitude: -5.3542017 
                } 
            },
        ];
    }
}