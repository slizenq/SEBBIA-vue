import { ref } from 'vue';

const emitter = {
    events: {},
    
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = ref([]);
        }
        this.events[event].value.push(callback);
    },
    
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].value.forEach(callback => callback(data));
        }
    },
    
    off(event, callback) {
        if (!this.events[event]) return;

        this.events[event].value = this.events[event].value.filter(cb => cb !== callback);
    },
};

export default emitter;