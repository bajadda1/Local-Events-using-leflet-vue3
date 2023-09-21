<template>
  <div class="relative w-full h-96 md:h-screen ">
    <div class="relative w-full">

      <button v-if="showSidebar" @click="closeSidBar" class="absolute top-0 left-[calc(50%-40px)]  z-1">return</button>
      <button v-else @click="openSidBar" class="absolute top-0 left-[calc(50%-40px)] z-1 ">{{ buttonContent }}</button>

      <button class="px-1 bg-black rounded-sm absolute top-0 left-[calc(50%)] z-1 text-sm  "
              style="border-radius: 50% !important;"

              v-if="showChevronUp==='up'" @click="showTable">
        <font-awesome-icon icon="fa-solid fa-chevron-down" style="color: black;" class="font-bold"/>
      </button>

      <button class=" px-1 bg-black rounded-sm absolute top-0 left-[calc(50%)] z-1 text-sm"
              style="border-radius: 50% !important;"
              v-if="showChevronUp==='down'" @click="hideTable">
        <font-awesome-icon icon="fa-solid fa-chevron-up" style="color: black;"/>
      </button>

      <p id="header"
         class="absolute top-0 right-4 bg-white p-2 pb-1 rounded rounded-b-4 shadow-md text-black text-xs">
      </p>
      <!-- ***************====================================== v-if="showTable"*********** TABLE-->

      <div
          class="absolute top-[26px] left-0 w-full bg-black opacity-90 rounded rounded-xl z-40 p-8 flex flex-col overflow-scroll "
          style="display: none" id="Table">
        <table class="w-full md:h-full text-white text-xs md:text-normal md:font-semibold ">
          <thead class="border border-0 border-transparent">
          <tr>
            <th v-for="key in Object.keys(eventAttributes)"
                class="border-[2px] border-solid border-gray-500 text-center bg-purple-900 md:font-bold ">
              {{ key }}
            </th>
          </tr>
          </thead>
          <tbody class="border border-0 border-transparent">
          <tr v-for="event in formSearchEvents">
            <td v-for="value in Object.values(event)" class="border-[2px] border-solid border-gray-500 text-center ">
              {{ value }}
            </td>
            <!--            <button class="Visualiser" @click="visualiser(event)">visualiser</button>-->
            <td class="border-[2px] border-solid border-gray-700 text-center">
              <a
                  type="button"
                  @click="visualiser(event)"
                  class="inline-block mb-1  bg-blue-500 px-4 py-1  font-medium text-white shadow-md shadow-black/5
                  focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none cursor-pointer ">
                show
              </a></td>
          </tr>
          </tbody>
        </table>
      </div>
      <!-- ***************====================================== form/sidebar-->
      <div class="absolute top-4 left-0 w-2/5 h-fit opacity-90 z-30 p-4" id="sidebar" style="display: none">
        <div class="w-full p-4 pt-12 bg-black relative rounded-[11px] ">
          <div
              class="mb-1 inline-flex w-full items-center rounded-lg bg-cyan-100 px-6 py-1 text-base text-danger-700"
              v-for="error in formErrors"

          >
  <span class="mr-2">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="rgb(255 0 0 / 90%)"
        class="h-4 w-4">
      <path
          fill-rule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
          clip-rule="evenodd"/>
    </svg>
  </span>
            {{ error }}
          </div>
          <form class="flex flex-col gap-5 rounded-[11px] border border-gray-300 p-4 bg-white shadow shadow-2xl"
          >
            <div class="relative h-10 w-full min-w-auto flex flex-row justify-center">
              <h3 class="md:text-xl font-bold">Event Information:</h3>
            </div>
            <!--        search event   -->
            <section v-if="searchRoute">
              <div class="relative h-10 min-w-auto mb-4">
                <input
                    class="peer h-full w-full rounded-[7px] border border-gray-300 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-purple-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    type="text"
                    v-model="eventAttributes.eventName"
                />
                <label
                    class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-purple-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-purple-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Event-Name
                </label>
              </div>
              <div class="relative h-10 min-w-auto mb-4">
                <input
                    class="peer h-full w-full rounded-[7px] border border-gray-300 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-purple-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    type="text"
                    v-model="eventAttributes.eventCategory"
                />
                <label
                    class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-purple-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-purple-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Event-Category
                </label>
              </div>
              <div class="relative h-10  min-w-auto mb-4">
                <input
                    class="peer h-full w-full rounded-[7px] border border-gray-300 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-indigo-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    type="date"
                    v-model="eventAttributes.eventDate"
                />
                <label
                    class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-indigo-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-indigo-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-indigo-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Event-Date
                </label>
              </div>

            </section>
            <!--        search event   -->

            <!--               event create    -->
            <section v-else>
              <div class="relative h-10  min-w-auto mb-4">
                <input
                    class="peer h-full w-full rounded-[7px] border border-gray-300 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    type="text"
                    v-model="eventAttributes.eventName"
                />
                <label
                    class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Event-Name
                </label>
              </div>
              <div class="relative h-10 min-w-auto mb-4">
                <input
                    class="peer h-full w-full rounded-[7px] border border-gray-300 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-purple-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    type="text"
                    v-model="eventAttributes.eventCategory"
                />
                <label
                    class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-purple-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-purple-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Event-Category
                </label>
              </div>
              <div class="relative h-10  min-w-auto mb-4">
                <input
                    class="peer h-full w-full rounded-[7px] border border-gray-300 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-indigo-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    type="date"
                    v-model="eventAttributes.eventDate"
                />
                <label
                    class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-indigo-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-indigo-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-indigo-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Event-Date
                </label>
              </div>
              <div class="relative h-10 min-w-auto mb-4">
                <input
                    class="peer h-full w-full rounded-[7px] border border-gray-300 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    type="text"
                    v-model="eventAttributes.eventLatitude"
                />
                <label
                    class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-teal-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-teal-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Event-Latitude
                </label>
              </div>
              <div class="relative h-10 min-w-auto mb-4">
                <input
                    class="peer h-full w-full rounded-[7px] border border-gray-300 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    type="text"
                    v-model="eventAttributes.eventLongitude"
                />
                <label
                    class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-teal-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-teal-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Event-Longitude
                </label>
              </div>
            </section>
            <!--        eveny create           -->


            <div class="relative h-10 min-w-auto">
              <input
                  type="submit"
                  :value="buttonContent"
                  class="bg-blue-600 w-full h-full w-full rounded-[7px] border border-blue-gray-200"
                  @click="addSearchEvent"
              />
            </div>
          </form>

        </div>
      </div>

      <!-- ******************************************* carte ============================================================ -->

      <div class="relative w-[calc(100%-8px)] ">
        <div id="mapContainer" class="h-screen w-full relative rounded rounded-6 z-0"></div>
        <div
            class="bg-white  rounded rounded-10 absolute top-36 mt-4 right-3.5 py-1 px-0.5  z-2 opacity-90 hover:opacity-100"
            v-if="full">
          <font-awesome-icon icon="fa-solid fa-minimize" size="xl" style="color: black;" @click="exitfullscreen"/>
        </div>
        <div
            class="bg-white rounded rounded-10 absolute top-36 mt-4 z-2 right-3.5 py-1 px-0.5 opacity-90 hover:opacity-100"
            v-else>
          <font-awesome-icon icon="fa-solid fa-maximize" size="xl" style="color: black;" @click="fullscreen"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "leaflet/dist/leaflet.css";
import {onMounted,ref } from "vue";
import 'leaflet-geosearch/dist/geosearch.css';
import {GeoSearchControl, OpenStreetMapProvider} from 'leaflet-geosearch';//leflet geocoder
import "leaflet.locatecontrol/dist/L.Control.Locate.css";
import L from "leaflet";
import "leaflet.locatecontrol";
import "leaflet.fullscreen";
import "leaflet.fullscreen/Control.FullScreen.css";

//------------------------firebase
import {dataRef} from "../firebase.js";

import {push, query,get, set} from 'firebase/database';
import {v4 as uuidv4} from 'uuid';



export default {
  name: "mapCarte",
  //---------------------------------------------------------------DATA
  data() {
    return {
      full: false,
      showSidebar: false,
      searchRoute: this.$route.path === "/search", //check if we are in search route or not
      buttonContent: this.$route.path === "/search" ? "search" : "create",//switch button btw search create?
      eventAttributes: {
        eventUuid: '',
        eventName: "",
        eventCategory: "",
        eventDate: "",
        eventLongitude: "",
        eventLatitude: "",
      },
      formErrors: [],
      formSearchEvents: [],
      showChevronUp: true,
    };

  },

  //-------------------------------------------------------SET UP THE MAP
  setup() {
    const center = [37.7749, -122.4194];//the center of map in the first load
    let mapDiv;//map
//==========================================SET UP THE GEOCODER FOR SEARCHING
    const provider = new OpenStreetMapProvider();

    const searchControl = new GeoSearchControl({
      provider: provider,
    });

    const setupLeafletMap = () => {
      mapDiv = L.map("mapContainer").setView(center, 13);//prepare envirement for the map and set the center and zoom

      //-----------------LAYER1--------------------------------
      let osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
      });

      //-----------------LAYER2----------------------------------
      let OpenStreetMap_DE = L.tileLayer('https://tile.openstreetmap.de/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      });

      //-----------------LAYER3----------------------------------
      let Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
        maxZoom: 20,
        attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      });

      //-----------------LAYER4----------------------------------
      let googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
      });

      //-----------------LAYER DEFAULT----------------------------------
      let MyMap = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
      }).addTo(mapDiv);

      //--------------------------------------change layer
      let baseMaps = {
        "Defaul-Map": MyMap,
        "OSM": osm,
        "OpenStreetMap_DE": OpenStreetMap_DE,
        "Stadia_AlidadeSmoothDark": Stadia_AlidadeSmoothDark,
        "googleTerrain": googleTerrain

      };

      L.control.layers(baseMaps).addTo(mapDiv);

      //--------------------------------------SHOW COORDINATES OF MOUSE
      mapDiv.on("mousemove", function (e) {
        const {lat, lng} = e.latlng;
        document.getElementById("header").innerHTML = `Latitude: ${lat.toFixed(4)} Longitude:${lng.toFixed(4)}`;
      });
      //===========================================================================================////////////////////
      // Get the user's current location
      L.control.locate().addTo(mapDiv);
      // Listen for location found event
      mapDiv.on("locationfound", (e) => {
        const {lat, lng} = e.latlng;
        L.marker([lat, lng])
            .addTo(mapDiv)
            .bindPopup("You are here")
            .openPopup();
        L.circle([lat, lng], {
          color: '#f03',
          fillColor: '#f03',
          fillOpacity: 0.2,
          radius: 500

        }).addTo(mapDiv);
      });
      // Listen for location error event
      mapDiv.on("locationerror", () => {
        alert("Unable to retrieve your location");
      });


      //------------SET POSITION OF ZOOM CONTROL IN MAP---------------
      mapDiv.zoomControl.setPosition("topright");
      // Get the user's current location
      mapDiv.locate({setView: true, maxZoom: 13});

      //===================geocoding*************************************************************
      mapDiv.addControl(searchControl);


      // ----Listen for map clicks SHOW CORDINATES WHEN CLICK ON MAP------------
      mapDiv.on("click", (e) => {
        const {lat, lng} = e.latlng;
        L.popup()
            .setLatLng([lat, lng])
            .setContent(`Latitude: ${lat.toFixed(4)}, Longitude: ${lng.toFixed(4)}`)
            .openOn(mapDiv);
      });
      //================================================
      L.control.fullscreen({
        position: 'topleft', // change the position of the button can be topleft, topright, bottomright or bottomleft, default topleft
        title: 'Show me the fullscreen !', // change the title of the button, default Full Screen
        titleCancel: 'Exit fullscreen mode', // change the title of the button when fullscreen is on, default Exit Full Screen
        content: null, // change the content of the button, can be HTML, default null
        forceSeparateButton: true, // force separate button to detach from zoom buttons, default false
        forcePseudoFullscreen: true, // force use of pseudo full screen even if full screen API is available, default false
        fullscreenElement: false // Dom element to render in full screen, false by default, fallback to map._container
      }).addTo(mapDiv);
      // function  visualiser(event){
      //   const marker = L.marker([event.EventLatitude, event.EventLongitude]).addTo(mapDiv);
      //   marker.bindPopup(`<b>${event.EventName}</b><br>${event.EventDate}`).openPopup();
      //
      // };
    };

    onMounted(() => {
      setupLeafletMap();
    });


    //Visualiser un event sur carte
    const showChevronUp = ref(true); // Define showChevronUp as a ref
    function visualiser(event) {
      document.getElementById("mapContainer").style.opacity = "100%";
      const marker = L.marker([event.EventLatitude, event.EventLongitude]).addTo(mapDiv);
      marker.bindPopup(`<b>Name:${event.EventName}</b><br><b>Category:${event.EventCategory}</b><br><b>Date:${event.EventDate}</b>`).openPopup();
      mapDiv.setView([event.EventLatitude, event.EventLongitude], 18);
      //close table
      document.getElementById("Table").style.display = "none";
      showChevronUp.value='up';
      // window.location.reload();
    };

    return {

      mapDiv,
      visualiser,
      showChevronUp,
    };
  },


  //------------------------------------------------------------------METHODES
  methods: {
    //full screen view
    fullscreen: function () {
      let IdMap = document.getElementById("FullScreen");
      IdMap.requestFullscreen();
      this.full = true;
    },
    exitfullscreen: function () {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        this.full = false;
      } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
        this.full = false;
      } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
        this.full = false;
      } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
        this.full = false;
      } else {
        document.exitFullscreen();
        this.full = true;
      }
    },
    openSidBar() {
      if(this.buttonContent==='create'){
        if(this.$store.state.logedin===true){
          this.showSidebar = true;
          document.getElementById("sidebar").style.display = "block";
          document.getElementById("mapContainer").style.opacity = "50%";
          document.getElementById("Table").style.display = "none";
          // Clear the form
          this.eventAttributes = {
            eventCategory: "",
            eventDate: "",
            eventUuid: '',
            eventLatitude: "",
            eventLongitude: "",
            eventName: "",
          };
          this.showChevronUp=false;

        }
        else{
          alert("you have to log in at first");
          this.$router.push('/login');
        }
      }
      this.showSidebar = true;
      document.getElementById("sidebar").style.display = "block";
      document.getElementById("mapContainer").style.opacity = "50%";
      document.getElementById("Table").style.display = "none";
      // Clear the form
      this.eventAttributes = {
        eventCategory: "",
        eventDate: "",
        eventUuid: '',
        eventLatitude: "",
        eventLongitude: "",
        eventName: "",
      };
      this.showChevronUp=false;
    },
    closeSidBar() {
      this.showSidebar = false;
      document.getElementById("sidebar").style.display = "none";
      document.getElementById("mapContainer").style.opacity = "100%";

    },
    showTable(){
      document.getElementById("Table").style.display = "block";
      this.showChevronUp='down';
    },
    hideTable(){
      document.getElementById("Table").style.display = "none";
      this.showChevronUp='up';
    },

    //-------------------------------------form validation
    CreateFormValidation: function () {
      let valid = true;
      if (this.searchRoute === false) {
        this.formErrors = [];//set the form empty
        if (!this.eventAttributes.eventName) {
          this.formErrors.push("Event-Name can't be empty");
          valid = false;
        }
        if (!this.eventAttributes.eventCategory) {
          this.formErrors.push("Event-Category can't be empty");
          valid = false;

        }
        if (!this.eventAttributes.eventDate) {
          this.formErrors.push("Event-Date can't be empty");
          valid = false;

        }
        if (!this.eventAttributes.eventLatitude) {
          this.formErrors.push("Event-Latitude can't be empty");
          valid = false;

        }
        if (!this.eventAttributes.eventLongitude) {
          this.formErrors.push("Event-Longitude can't be empty");
          valid = false;
        }
        if (this.eventAttributes.eventLatitude && isNaN(this.eventAttributes.eventLatitude)) {
          this.formErrors.push("Event-Latitude should be a number");
          valid = false;
        }
        if (this.eventAttributes.eventLongitude && isNaN(this.eventAttributes.eventLongitude)) {
          this.formErrors.push("Event-Longitude should be a number");
          valid = false;
        }
        return valid;
      }

    },
    //-------------------------------------------fireBase
    async addSearchEvent() {
      // Generate a unique UUID for the record
      const newUuid = uuidv4();
      //search route--------------------------*************************************+++++++++++++++++++++++++++++++++++
      if (this.searchRoute) {

        const DataSearch = {
          EventName: this.eventAttributes.eventName,
          EventCategory: this.eventAttributes.eventCategory,
          EventDate: this.eventAttributes.eventDate,
        };
        try {
          // Retrieve all data
          const snapshot = await get(query(dataRef));
          console.log(snapshot.val());

          if (snapshot.exists()) {
            const matchingRecords = [];

            // Iterate through the data and filter based on criteria
            snapshot.forEach((childSnapshot) => {
              const record = childSnapshot.val();

              if (
                  (!DataSearch.EventName || record.EventName === DataSearch.EventName) &&
                  (!DataSearch.EventCategory || record.EventCategory === DataSearch.EventCategory) &&
                  (!DataSearch.EventDate || record.EventDate === DataSearch.EventDate)
              ) {
                matchingRecords.push(record);
              }
            });
            //fill sorm with data returned
            this.formSearchEvents = [].concat(matchingRecords);

            if (matchingRecords.length > 0) {
              console.log('Matching Data:', matchingRecords);

              //-------------------------------------close sidebar and show table
              this.closeSidBar();
              document.getElementById("Table").style.display = "block";
              this.showChevronUp='down';
              //No event matching exists
            } else {
              this.eventAttributes = {
                eventCategory: "",
                eventDate: "",
                eventUuid: '',
                eventLatitude: "",
                eventLongitude: "",
                eventName: "",
              };
              // matchingRecords.push(this.eventAttributes);
              this.closeSidBar();
              alert('No event found for the specified criteria.');
            }
          } else {
            alert('No data available in the database.');
          }
        } catch (error) {
          console.error('Error querying data:', error);
        }



      }


      //create route--------------------------*************************************+++++++++++++++++++++++++++++++++++
      else {
        let isValid = this.CreateFormValidation();
        if (isValid) {
          const newData = {
            EventId: this.eventAttributes.eventUuid,
            EventName: this.eventAttributes.eventName,
            EventCategory: this.eventAttributes.eventCategory,
            EventDate: this.eventAttributes.eventDate,
            EventLongitude: this.eventAttributes.eventLongitude,
            EventLatitude: this.eventAttributes.eventLatitude,
          };
          // Fetch all data from the 'events' node
          const snapshot = await get(dataRef);
          if (snapshot.exists()) {
            const data = snapshot.val();
            console.log(data);
            // Check if any record has the same combination of properties
            const isDuplicate = Object.values(data).some((item) => {
              return (
                  item.EventDate === newData.EventDate &&
                  item.EventLatitude === newData.EventLatitude &&
                  item.EventLongitude === newData.EventLongitude
              );
            });
            if (isDuplicate) {
              alert('Data already exists. Handle the conflict.');
            } else {
              // All three columns are unique; add the new data to the database

              const newRecordRef = push(dataRef);
              // Get the push ID (eventId) generated by Firebase
              const eventId = newRecordRef.key;
              // Set the eventId in the newData
              newData.EventId = eventId;
              await set(newRecordRef, newData);
              alert('New event added successfully.');
              this.showSidebar = false;
              document.getElementById("sidebar").style.display = "none";
              document.getElementById("mapContainer").style.opacity = "100%";

            }

          } else {
            const newRecordRef = push(dataRef);
            // Get the push ID (eventId) generated by Firebase
            const eventId = newRecordRef.key;
            // Set the eventId in the newData
            newData.EventId = eventId;
            await set(newRecordRef, newData);

            alert('New event added successfully.');
            this.showSidebar = false;
            document.getElementById("sidebar").style.display = "none";
            document.getElementById("mapContainer").style.opacity = "100%";
          }

        }

      }
      // Clear the form
      this.eventAttributes = {
        eventCategory: "",
        eventDate: "",
        eventUuid: '',
        eventLatitude: "",
        eventLongitude: "",
        eventName: "",
      };

    },
  },

};
</script>

<style scoped>

button {
  letter-spacing: 1px;
  border: 1px solid white;
  border-radius: 4px;
  padding: 0 2px;
  position: relative;
  overflow: hidden;
  color: Black;
  background-color: white;
  box-shadow: 1px 1px 10px 0 #c4bbbb;
  z-index: 1;
}

button::before {
  content: "";
  background-color: #0fe8f7;
  height: 100%;
  width: 0;
  position: absolute;
  top: 0;
  left: -30%;
  transition-duration: 1s;
  transform: skew(35deg);
  z-index: -1;
}

button:hover::before {
  width: 100%;
}

button:hover {
  transition-delay: 0.3s;
  color: blue;
  box-shadow: 0 0 10px cyan, 0 0 20px cyan, 0 0 40px cyan,
  0 0 80px cyan, 0 0 160px cyan;
}

@media (max-width: 640px) {
  #header {
    display: none;
  }

  #sidebar {
    width: 70%;
  }
}

</style>
