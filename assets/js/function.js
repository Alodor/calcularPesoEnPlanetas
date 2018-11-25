new Vue({
    el: '#app',
    data: {
        peso: ''
    },
    computed: {
        calcularPesoTierra: function() {
            let masa = parseInt(this.peso)
            let peso = masa * 9.8
            let conversion = peso * 0.102
            return conversion.toFixed(2)
        },
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
    }
})