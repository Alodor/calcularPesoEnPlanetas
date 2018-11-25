new Vue({
    el: '#app',
    data: {
        peso: null,
        see: false,
        planets: [
            {
                name: 'Mercurio',
                description: 'Es el planeta del sistema solar más cercano al Sol y el más pequeño.',
                link: 'https://es.wikipedia.org/wiki/Mercurio_(planeta)',
                image: 'assets/images/mercurio.jpg'
            },
            {
                name: 'Venus',
                description: 'Es el segundo planeta del sistema solar cercano al Sol y el sexto más grande.',
                link: 'https://es.wikipedia.org/wiki/Venus_(planeta)',
                image: 'assets/images/venus.jpg'
            },
            {
                name: 'Tierra',
                description: 'Es el tercer planeta del sistema solar cercano al Sol y el quinto más grande.',
                link: 'https://es.wikipedia.org/wiki/Tierra',
                image: 'assets/images/tierra.jpg'
            },
            {
                name: 'Marte',
                description: 'Es el cuarto planeta del sistema solar cercano al Sol y el segundo más pequeño.',
                link: 'https://es.wikipedia.org/wiki/Marte_(planeta)',
                image: 'assets/images/marte.jpg'
            },
            {
                name: 'Júpiter',
                description: 'Es el quinto planeta del sistema solar cercano al Sol y el más grande.',
                link: 'https://es.wikipedia.org/wiki/J%C3%BApiter_(planeta)',
                image: 'assets/images/jupiter.jpg'
            },
            {
                name: 'Saturno',
                description: 'Es el sexto planeta del sistema solar cercano al Sol y el segundo más grande.',
                link: 'https://es.wikipedia.org/wiki/Saturno_(planeta)',
                image: 'assets/images/saturno.jpg'
            },
            {
                name: 'Urano',
                description: 'Es el séptimo planeta del sistema solar cercano al Sol y el tercero más grande.',
                link: 'https://es.wikipedia.org/wiki/Urano_(planeta)',
                image: 'assets/images/urano.jpg'
            },
            {
                name: 'Neptuno',
                description: 'Es el octavo planeta del sistema solar en distancia al sol y el más lejano.',
                link: 'https://es.wikipedia.org/wiki/Neptuno_(planeta)',
                image: 'assets/images/neptuno.jpg'
            },
            {
                name: 'Plutón',
                description: 'Es un planeta enano del sistema solar situado a continuación de la órbita de Neptuno.',
                link: 'https://es.wikipedia.org/wiki/Plut%C3%B3n_(planeta_enano)',
                image: 'assets/images/pluton.jpg'
            }
        ]
    },
    computed: {        
        calcularPesoMercurio: function() {
            let masa = parseInt(this.peso)
            let peso = masa * 3.70
            let conversion = peso * 0.102
            return conversion.toFixed(2)
        },
        calcularPesoVenus: function() {
            let masa = parseInt(this.peso)
            let peso = masa * 8.87
            let conversion = peso * 0.102
            return conversion.toFixed(2)
        },
        calcularPesoTierra: function() {
            let masa = parseInt(this.peso)
            let peso = masa * 9.8
            let conversion = peso * 0.102
            return conversion.toFixed(2)
        },
        calcularPesoMarte: function() {
            let masa = parseInt(this.peso)
            let peso = masa * 3.71
            let conversion = peso * 0.102
            return conversion.toFixed(2)
        },
        calcularPesoJupiter: function() {
            let masa = parseInt(this.peso)
            let peso = masa * 23.12
            let conversion = peso * 0.102
            return conversion.toFixed(2)
        },
        calcularPesoSaturno: function() {
            let masa = parseInt(this.peso)
            let peso = masa * 8.96
            let conversion = peso * 0.102
            return conversion.toFixed(2)
        },
        calcularPesoUrano: function() {
            let masa = parseInt(this.peso)
            let peso = masa * 8.69
            let conversion = peso * 0.102
            return conversion.toFixed(2)
        },
        calcularPesoNeptuno: function() {
            let masa = parseInt(this.peso)
            let peso = masa * 11
            let conversion = peso * 0.102
            return conversion.toFixed(2)
        },
        calcularPesoPluton: function() {
            let masa = parseInt(this.peso)
            let peso = masa * 0.81
            let conversion = peso * 0.102
            return conversion.toFixed(2)
        }
    },
    methods: {
        mostrarResultado: function() {
            if(this.peso == '') {
                this.see = false    
            } else {
                this.see = true    
            }                        
        }
    }
})