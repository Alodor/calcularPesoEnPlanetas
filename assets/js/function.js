new Vue({
    el: '#app',
    data: {
        peso: ''
    },
    computed: {
        calcular: function() {
            let peso = parseInt(this.peso)
            let resultado = peso * 5
            return resultado
        }
    }
})