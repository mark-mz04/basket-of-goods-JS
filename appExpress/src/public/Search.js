export const Search = {
    data() {
        return {
            searchLine: ''
        }
    },
    template: `
        <form action="#" class="search-form" @submit.prevent="">
                <input type="text" class="goods-search" v-model="searchLine" />
                <button @click="$root.$refs.catalog.filter()" class="search-button" type="submit">Искать</button>
            </form>
   `
}