<template>
    <v-select :items="people" v-model="e11" label="Select" item-text="name" item-value="name" multiple chips max-height="auto" autocomplete>
        <template slot="selection" slot-scope="data">
                        <v-chip :selected="data.selected" :key="JSON.stringify(data.item)" close class="chip--select-multi" @input="data.parent.selectItem(data.item)">
                            {{ data.item.name }}
                        </v-chip>
        </template>
        <template slot="item" slot-scope="data">
            <template v-if="typeof data.item !== 'object'">
                <v-list-tile-content v-text="data.item"></v-list-tile-content>
            </template>
            <template v-else>
                <v-list-tile-content>
                    <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="data.item.group"></v-list-tile-sub-title>
                </v-list-tile-content>
            </template>
        </template>
        </v-select>
</template>

<script>
    export default {
        data() {
            return {
                e11: [],
                people: [{
                        header: 'Group 1'
                    },
                    {
                        name: 'Sandra Adams',
                        group: 'Group 1'
                    },
                    {
                        name: 'Ali Connors',
                        group: 'Group 1'
                    },
                    {
                        name: 'Trevor Hansen',
                        group: 'Group 1'
                    },
                    {
                        name: 'Tucker Smith',
                        group: 'Group 1'
                    },
                    {
                        divider: true
                    },
                    {
                        header: 'Group 2'
                    },
                    {
                        name: 'Britta Holt',
                        group: 'Group 2'
                    },
                    {
                        name: 'Jane Smith ',
                        group: 'Group 2'
                    },
                    {
                        name: 'John Smith',
                        group: 'Group 2'
                    },
                    {
                        name: 'Sandra Williams',
                        group: 'Group 2'
                    }
                ]
            }
        }
    }
</script>