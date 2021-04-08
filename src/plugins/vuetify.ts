import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
            primary: "#DEDAF4", // #E53935
            secondary: "#7F74B4", // #FFCDD2
            },
        },
    },
});
