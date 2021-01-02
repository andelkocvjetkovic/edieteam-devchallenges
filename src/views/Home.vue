<template>
  <main class="mt-10 px-3 lg:px-9 xl:px-12">
    <section class="flex flex-col font-serif"
      ><h2
        class="w-4/5 ml-6 text-sm text-blue-600 font-medium lg:text-lg xl:text-xl"
        >Unhappy with your website?</h2
      >
      <h1
        class="w-4/5 ml-6 tracking-wide font-medium text-2xl leading-7 font-sans lg:text-4xl xl:text-5xl"
        >We create beautiful and fast web services</h1
      >
      <div class="mt-8 relative" style="padding-bottom:44%;">
        <img
          class="absolute top-0 left-0 w-full h-full rounded-2xl object-cover object-center"
          src="../assets/heroImage.jpg"
          alt="Image of team"
        />
      </div>
      <span
        id="mySpan"
        class="mt-8 ml-6 w-3/5 tracking-wider font-medium text-2xl leading-7 font-sans lg:text-4xl lg:mt-10"
        >Story,emotion and purpose</span
      >
      <span
        class="mt-3 ml-6 text-sm w-4/5 text-gray-500 tracking-tight leading-4 font-serif lg:w-2/4 lg:text-lg lg:leading-5"
        >We help transform your ideas into real world applications that will
        outpreform your toughest competition and help you achieve your strategic
        goals in shor period of time.
      </span>
      <div class="mt-6 ml-6 ">
        <the-forms-email></the-forms-email>
      </div>
    </section>
    <article class="mt-16 ml-6 ">
      <h1 class="font-semibold text-2xl w-4/6 leading-9 font-sans lg:text-4xl"
        >We offer high demand services</h1
      >
      <section class="lg:flex lg:flex-wrap ">
        <aside-our-service>
          <template #svg>
            <svg
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              class="w-12 h-12 lg:h-14 lg:w-14"
            >
              <g>
                <path
                  d="m29.36 89c0 12.407 10.121 22.5 22.561 22.5s22.56-10.093 22.56-22.5-10.12-22.5-22.56-22.5-22.561 10.093-22.561 22.5zm30.121 0c0 4.136-3.392 7.5-7.561 7.5s-7.56-3.364-7.56-7.5 3.392-7.5 7.561-7.5 7.56 3.364 7.56 7.5z"
                />
                <path
                  d="m139.744 89c0-12.407-10.121-22.5-22.561-22.5s-22.56 10.093-22.56 22.5 10.121 22.5 22.561 22.5 22.56-10.093 22.56-22.5zm-30.121 0c0-4.136 3.392-7.5 7.561-7.5s7.561 3.364 7.561 7.5-3.392 7.5-7.561 7.5-7.561-3.364-7.561-7.5z"
                />
                <path
                  d="m203.125 89c0-12.407-10.121-22.5-22.561-22.5s-22.561 10.093-22.561 22.5 10.121 22.5 22.561 22.5 22.561-10.093 22.561-22.5zm-30.122 0c0-4.136 3.392-7.5 7.561-7.5s7.561 3.364 7.561 7.5-3.392 7.5-7.561 7.5-7.561-3.364-7.561-7.5z"
                />
                <path
                  d="m458.809 111.5c12.439 0 22.561-10.093 22.561-22.5s-10.121-22.5-22.561-22.5h-210.849c-12.44 0-22.561 10.093-22.561 22.5s10.121 22.5 22.561 22.5zm-218.41-22.5c0-4.136 3.392-7.5 7.561-7.5h210.849c4.169 0 7.561 3.364 7.561 7.5s-3.392 7.5-7.561 7.5h-210.849c-4.169 0-7.561-3.364-7.561-7.5z"
                />
                <path
                  d="m484.5 34h-391.5c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h391.5c6.893 0 12.5 5.607 12.5 12.5v64.5h-482v-64.5c0-6.893 5.607-12.5 12.5-12.5h30.5c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-30.5c-15.164 0-27.5 12.336-27.5 27.5v389c0 15.164 12.336 27.5 27.5 27.5h457c15.164 0 27.5-12.336 27.5-27.5v-48.5c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v48.5c0 6.893-5.607 12.5-12.5 12.5h-457c-6.893 0-12.5-5.607-12.5-12.5v-309.5h482v226c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-305.5c0-15.164-12.337-27.5-27.5-27.5z"
                />
                <path
                  d="m373.5 218.5h-57.5c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h57.5c9.649 0 17.5-7.851 17.5-17.5v-40c0-9.649-7.851-17.5-17.5-17.5h-234c-9.649 0-17.5 7.851-17.5 17.5v40c0 9.649 7.851 17.5 17.5 17.5h141.5c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-141.5c-1.378 0-2.5-1.122-2.5-2.5v-40c0-1.378 1.122-2.5 2.5-2.5h234c1.379 0 2.5 1.122 2.5 2.5v40c0 1.378-1.121 2.5-2.5 2.5z"
                />
                <path
                  d="m256 251c-27.294 0-49.5 22.206-49.5 49.5s22.206 49.5 49.5 49.5 49.5-22.206 49.5-49.5-22.206-49.5-49.5-49.5zm0 84c-19.023 0-34.5-15.477-34.5-34.5s15.477-34.5 34.5-34.5 34.5 15.477 34.5 34.5-15.477 34.5-34.5 34.5z"
                />
                <path
                  d="m395 251c-27.294 0-49.5 22.206-49.5 49.5s22.206 49.5 49.5 49.5 49.5-22.206 49.5-49.5-22.206-49.5-49.5-49.5zm0 84c-19.023 0-34.5-15.477-34.5-34.5s15.477-34.5 34.5-34.5 34.5 15.477 34.5 34.5-15.477 34.5-34.5 34.5z"
                />
                <path
                  d="m117 251c-27.294 0-49.5 22.206-49.5 49.5s22.206 49.5 49.5 49.5c6.541 0 12.899-1.258 18.9-3.738 3.828-1.583 5.648-5.968 4.066-9.796-1.583-3.829-5.968-5.649-9.796-4.066-4.175 1.725-8.606 2.6-13.17 2.6-19.023 0-34.5-15.477-34.5-34.5s15.477-34.5 34.5-34.5 34.5 15.477 34.5 34.5c0 3.648-.565 7.237-1.679 10.667-1.279 3.94.877 8.17 4.817 9.45 3.941 1.28 8.171-.878 9.45-4.817 1.601-4.929 2.412-10.077 2.412-15.3 0-27.294-22.206-49.5-49.5-49.5z"
                />
                <path
                  d="m157 365h-70c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h70c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"
                />
                <path
                  d="m157 395h-80c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h80c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"
                />
                <path
                  d="m157 425h-80c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h80c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"
                />
                <path
                  d="m296 365h-70c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h70c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"
                />
                <path
                  d="m296 395h-80c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h80c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"
                />
                <path
                  d="m296 425h-80c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h80c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"
                />
                <path
                  d="m435 365h-70c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h70c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"
                />
                <path
                  d="m435 395h-80c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h80c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"
                />
                <path
                  d="m435 425h-80c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h80c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"
                />
              </g>
            </svg>
          </template>
          <template #header> UI/UX Design</template>
        </aside-our-service>
        <aside-our-service>
          <template #svg>
            <svg
              viewBox="0 -25 424 424"
              xmlns="http://www.w3.org/2000/svg"
              class="w-12 h-12 lg:h-14 lg:w-14"
            >
              <path
                d="m167.289062 272.132812c-1.601562 0-3.214843-.550781-4.53125-1.671874l-45.296874-38.570313c-1.5625-1.332031-2.460938-3.277344-2.460938-5.332031 0-2.050782.902344-3.996094 2.460938-5.328125l45.296874-38.570313c2.941407-2.507812 7.359376-2.152344 9.867188.789063 2.503906 2.945312 2.152344 7.363281-.792969 9.867187l-39.035156 33.242188 39.035156 33.242187c2.945313 2.507813 3.296875 6.925781.792969 9.867188-1.386719 1.628906-3.355469 2.464843-5.335938 2.464843zm0 0"
              />
              <path
                d="m256.710938 272.132812c-1.980469 0-3.949219-.835937-5.332032-2.464843-2.507812-2.941407-2.152344-7.359375.789063-9.867188l39.035156-33.242187-39.035156-33.242188c-2.941407-2.503906-3.296875-6.921875-.789063-9.867187 2.503906-2.941407 6.925782-3.296875 9.863282-.789063l45.296874 38.570313c1.5625 1.332031 2.460938 3.277343 2.460938 5.328125 0 2.054687-.898438 4-2.460938 5.332031l-45.296874 38.570313c-1.316407 1.121093-2.929688 1.671874-4.53125 1.671874zm0 0"
              />
              <path
                d="m195.964844 301.0625c-.480469 0-.964844-.050781-1.453125-.152344-3.78125-.796875-6.203125-4.511718-5.40625-8.292968l28.230469-134.035157c.796874-3.78125 4.507812-6.203125 8.292968-5.40625 3.78125.796875 6.203125 4.507813 5.40625 8.292969l-28.230468 134.035156c-.695313 3.296875-3.601563 5.558594-6.839844 5.558594zm0 0"
              />
              <path
                d="m377 374.085938h-330c-25.914062 0-47-21.082032-47-47v-280.085938c0-25.914062 21.085938-47 47-47h330c25.914062 0 47 21.085938 47 47v280.085938c0 25.917968-21.085938 47-47 47zm-330-360.085938c-18.195312 0-33 14.804688-33 33v280.085938c0 18.195312 14.804688 33 33 33h330c18.195312 0 33-14.804688 33-33v-280.085938c0-18.195312-14.804688-33-33-33zm0 0"
              />
              <path
                d="m417 112.089844h-410c-3.867188 0-7-3.132813-7-7 0-3.863282 3.132812-7 7-7h410c3.867188 0 7 3.136718 7 7 0 3.867187-3.132812 7-7 7zm0 0"
              />
              <path
                d="m119.601562 78.59375c-12.210937 0-22.152343-9.941406-22.152343-22.152344 0-12.214844 9.941406-22.152344 22.152343-22.152344 12.214844 0 22.152344 9.9375 22.152344 22.152344 0 12.210938-9.9375 22.152344-22.152344 22.152344zm0-30.304688c-4.492187 0-8.152343 3.65625-8.152343 8.152344s3.660156 8.152344 8.152343 8.152344c4.496094 0 8.152344-3.65625 8.152344-8.152344s-3.65625-8.152344-8.152344-8.152344zm0 0"
              />
              <path
                d="m51.539062 78.378906c-12.214843 0-22.152343-9.9375-22.152343-22.152344 0-12.214843 9.9375-22.152343 22.152343-22.152343 12.214844 0 22.152344 9.9375 22.152344 22.152343 0 12.214844-9.9375 22.152344-22.152344 22.152344zm0-30.304687c-4.492187 0-8.152343 3.660156-8.152343 8.152343 0 4.496094 3.660156 8.152344 8.152343 8.152344 4.496094 0 8.152344-3.65625 8.152344-8.152344 0-4.492187-3.65625-8.152343-8.152344-8.152343zm0 0"
              />
              <path
                d="m187.664062 78.804688c-12.210937 0-22.148437-9.9375-22.148437-22.152344 0-12.210938 9.9375-22.148438 22.148437-22.148438 12.214844 0 22.152344 9.9375 22.152344 22.148438 0 12.214844-9.9375 22.152344-22.152344 22.152344zm0-30.304688c-4.492187 0-8.148437 3.65625-8.148437 8.152344s3.65625 8.152344 8.148437 8.152344c4.496094 0 8.152344-3.65625 8.152344-8.152344s-3.65625-8.152344-8.152344-8.152344zm0 0"
              />
            </svg>
          </template>
          <template #header> Front end</template>
        </aside-our-service>
        <aside-our-service>
          <template #svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-12 h-12 lg:h-14 lg:w-14"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
              />
            </svg>
          </template>
          <template #header> Back End</template>
        </aside-our-service>
      </section>
    </article>
    <article
      class="mt-12 flex flex-col lg:flex-row lg:flex-wrap lg:flex-shrink-0 lg:px-4"
    >
      <h1
        class="ml-6 text-2xl w-8/12 leading-7 tracking-tight sm:text-3xl lg:text-4xl lg:mt-12 lg:w-6/12 "
        >Good design means good business</h1
      >
      <aside-with-image>
        <template #image>
          <img
            id="slika0"
            src="../assets/smarthome.jpg"
            alt="smart home"
            class="absolute top-0 left-0 w-full h-full"
          />
        </template>
        <template #textH3>Full stack application</template>
        <template #textH2>Smart home dashboard</template>
      </aside-with-image>
      <aside-with-image>
        <template #image>
          <img
            id="slika1"
            src="../assets/onboard.png"
            alt="onboard"
            class="absolute top-0 left-0 w-full h-full slika"
          />
        </template>
        <template #textH3>UX/UI design</template>
        <template #textH2>Onboard application</template>
      </aside-with-image>
      <aside-with-image>
        <template #image
          ><img
            id="slika2"
            src="../assets/booking.png"
            alt="booking"
            class="absolute top-0 left-0 w-full h-full"
          />
        </template>
        <template #textH3>Mobile application</template>
        <template #textH2>Booking system</template>
      </aside-with-image>
      <aside-with-image>
        <template #image>
          <img
            id="slika3"
            src="../assets/juice-product.png"
            alt="juice product"
            class="absolute top-0 left-0 w-full h-full"
          />
        </template>
        <template #textH3>Front End application</template>
        <template #textH2>Juice product hompage</template>
      </aside-with-image>
      <h1 class="mt-6 text-blue-600 text-xl font-serif lg:ml-2 cursor-pointer"
        >See more &rarr;</h1
      >
    </article>
    <article class="mt-24 lg:flex">
      <section class="w-5/6 lg:w-1/2 lg:flex lg:flex-col lg:justify-center">
        <h3 class="font-serif text-sm text-red-600 xl:text-xl">
          Meet the team
        </h3>
        <h1 class="w-full text-1xl leading-8 tracking-wide xl:text-4xl"
          >We are chilled and a laidback team</h1
        >
        <p
          class="mt-4 w-11/12 font-serif text-sm tracking-tight text-gray-500 lg:text-base"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
          repellendus consequuntur unde dolore deleniti, perferendis possimus
          tempore vero quod praesentium accusamus consectetur.</p
        >
      </section>
      <aside
        id="asideTeam"
        class="mt-2 grid grid-cols-2 grid-rows-2 gap-2 lg:w-1/2"
      >
        <div class="col-span-1 row-span-2 flex justify-center items-center">
          <div
            id="teamimg0"
            class="relative w-full "
            style="padding-bottom:100%"
          >
            <img
              src="../assets/person3.png"
              alt="Team person"
              class="absolute top-0 left-0 w-full h-full rounded-xl"
            />
          </div>
        </div>
        <div class="col-span-1 row-span-1 w-11/12">
          <div
            id="teamimg1"
            class="relative"
            style="padding-bottom:90%; top:18%"
          >
            <img
              src="../assets/person1.png"
              alt="Team person"
              class="absolute top-0 left-0 w-full h-full rounded-xl"
            />
          </div>
        </div>
        <div class="col-span-1 row-span-1 w-full">
          <div id="teamimg2" class="relative" style="padding-bottom:100%">
            <img
              src="../assets/person2.png"
              alt="Team person"
              class="absolute top-0 left-0 w-full h-full rounded-xl"
            />
          </div>
        </div>
      </aside>
    </article>
    <article class="mt-24 w-11/12 pb-10 lg:w-7/12">
      <h2 class="font-sans text-xl  tracking-normal leading-relaxed"
        >"Fast and outstanding results. Edie understands their customer's needs.
        They have a young and talented team."</h2
      >
      <div class="mt-4 flex w-full space-x-4">
        <div class="w-1/5 ">
          <div class="w-full relative" style="padding-bottom:100%">
            <img
              src="../assets/person4.png"
              alt="Person"
              class="absolute top-0 left-0 w-full h-full rounded-xl"
            />
          </div>
        </div>
        <figure
          class="flex-grow flex flex-col justify-around font-serif sm:py-5"
        >
          <h3 class=" text-lg">Carlos Tran</h3>
          <h4 class="text-sm text-gray-600">The Decorate Gatsby</h4>
        </figure>
      </div>
    </article>
  </main>
</template>

<script>
import TheFormsEmail from "../components/TheFormsEmail.vue";
import AsideOurService from "../components/AsideOurService.vue";
import AsideWithImage from "../components/AsideWithImage.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, onUnmounted } from "vue";
export default {
  name: "Home",
  components: { TheFormsEmail, AsideOurService, AsideWithImage },
  setup() {
    onUnmounted(function() {
      ScrollTrigger.getAll().forEach(t => t.disable());
    });
    onMounted(function initGsap() {
      if (ScrollTrigger.getAll().length > 0) {
        ScrollTrigger.getAll().forEach(t => {
          t.enable();
        });
      }
      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo(
        "#slika0",
        {
          x: function getWidh() {
            return document.querySelector("#slika0").offsetWidth * 2 || 0;
          },
        },
        {
          x: 0,
          duration: 0.4,
          ease: "circ.out",
          scrollTrigger: {
            trigger: "#slika0",
            start: function getStart() {
              return `top bottom`;
            },
            end: function getEnd() {
              var offset = document.querySelector("#slika0").offsetWidth || 0;
              return `+=${offset / 2} bottom`;
            },
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        "#slika1",
        {
          x: function getWidh() {
            return document.querySelector("#slika1").offsetWidth * 2 || 0;
          },
        },
        {
          x: 0,
          duration: 0.4,
          ease: "circ.out",
          scrollTrigger: {
            trigger: "#slika1",
            start: function getStart() {
              return `top bottom`;
            },
            end: function getEnd() {
              var offset = document.querySelector("#slika1").offsetWidth || 0;
              return `+=${offset / 2} bottom`;
            },
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        "#slika2",
        {
          x: function getWidh() {
            return document.querySelector("#slika2").offsetWidth * 2 || 0;
          },
        },
        {
          x: 0,
          duration: 0.4,
          ease: "circ.out",
          scrollTrigger: {
            trigger: "#slika2",
            start: function getStart() {
              return `top bottom`;
            },
            end: function getEnd() {
              var offset = document.querySelector("#slika2").offsetWidth || 0;
              return `+=${offset / 2} bottom`;
            },
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        "#slika3",
        {
          x: function getWidh() {
            return document.querySelector("#slika3").offsetWidth * 2 || 0;
          },
        },
        {
          x: 0,
          duration: 0.4,
          ease: "circ.out",
          scrollTrigger: {
            trigger: "#slika3",
            start: function getStart() {
              return `top bottom`;
            },
            end: function getEnd() {
              var offset = document.querySelector("#slika3").offsetWidth || 0;
              return `+=${offset / 2} bottom`;
            },
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        "#teamimg0",
        {
          scale: 0.7,
        },
        {
          scale: 1,
          duration: 0.4,
          ease: "slow(0.7, 0.7, false)",
          scrollTrigger: {
            trigger: "#teamimg0",
            start: function start() {
              return `top bottom`;
            },
            end: function end() {
              return "top center";
            },
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        "#teamimg1",
        {
          scale: 0.7,
        },
        {
          scale: 1,
          duration: 0.4,
          ease: "slow(0.7, 0.7, false)",
          scrollTrigger: {
            trigger: "#teamimg1",
            start: function start() {
              return `top bottom`;
            },
            end: function end() {
              return "top center";
            },
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        "#teamimg2",
        {
          scale: 0.7,
        },
        {
          scale: 1,
          duration: 0.4,
          ease: "slow(0.7, 0.7, false)",
          scrollTrigger: {
            trigger: "#teamimg2",
            start: function start() {
              return `top bottom`;
            },
            end: function end() {
              return "top center";
            },
            scrub: 1,
          },
        }
      );
    });
  },
};
</script>

<style scoped></style>
