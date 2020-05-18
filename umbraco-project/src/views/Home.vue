<template>
  <div class="home">
    <template v-if="!isLoading">
      <div class="page__container">
        <FilterBox />
        <MainData />
        <!--Listens for toggleShowHide method and triggers it-->
        <ShowHide
          @toggle="toggleShowHide">
        </ShowHide>
        <DailyTicketsStats
          :showtickets="showTickets">
        </DailyTicketsStats>
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import FilterBox from "@/components/FilterBox.vue";
import DailyTicketsStats from "@/components/allTicketsColumnHeaders";
import MainData from "@/components/MainData";
import ShowHide from "@/components/ShowHide";

export default {
  name: "Home",
  components: {
    FilterBox,
    DailyTicketsStats,
    MainData,
    ShowHide
  },
  	
  data() {
    return {
      isLoading: false,
      showTickets: true,
    };
  },

  created() {
    axios.get("//localhost:3000/home").then(({ data }) => {
      this.home = data.home.home;
      this.isLoading = false;
    });
  },
    //Part of the ShowHide button toggle method emit
    methods: {
      toggleShowHide(event) {
        this.showTickets = event.show;
    }
  }
};
</script>