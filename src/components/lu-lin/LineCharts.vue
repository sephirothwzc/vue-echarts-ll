<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex xs12 sm6 md4>
                <v-menu ref="menu2" :close-on-content-click="false" v-model="menu2" :nudge-right="40" :return-value.sync="date" lazy transition="scale-transition" offset-y full-width min-width="290px">
                    <v-text-field slot="activator" v-model="date" label="请选择日期" prepend-icon="event" readonly></v-text-field>
                    <v-date-picker v-model="date" @input="$refs.menu2.save(date)"></v-date-picker>
                </v-menu>
            </v-flex>
            <v-spacer></v-spacer>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                date: null,
                menu: false,
                modal: false,
                menu2: false
            }
        }
    }
</script>
