<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="12">
        <Hooper
          :settings="{
            itemsToShow: itemsToShow,
            infiniteScroll: true,
            autoPlay: true,
            centerMode: true,
            playSpeed: 2000,
            transition: 3000,
          }"
        >
          <Slide v-for="t in testimonials" :key="t.name">
            <v-card dark tile class="mx-2" color="transparent">
              <v-card-text>
                <v-row>
                  <v-col cols="4">
                    <v-img
                      v-if="t.image"
                      :src="t.image"
                      :height="isMobile ? 100 : 150"
                      contain
                    />
                    <v-icon
                      v-else
                      color="grey lighten-2"
                      :size="isMobile ? 100 : 150"
                      >mdi-account</v-icon
                    >
                    <p class="primary--text font-weight-bold">{{ t.name }}</p>
                  </v-col>
                  <v-col>
                    <p class="pa-2">
                      {{ t.message }}
                    </p>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </Slide>
        </Hooper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "TestiMonials",
  data: () => ({
    testimonials: [
      {
        name: "Felix Mbugua",
        message:
          "My new website has made me very delighted. It has a professional appearance and is quite simple to use. My interactions with Kimani have been wonderful. He manages things effectively and is accessible if I have any questions. He also provides me with monthly statistics so I can monitor the performance of my website. Anyone looking for website design or SEO services should contact him, in my opinion!",
        image:
          "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/294246570_5263738260360577_1859487890398139476_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=XxKoU29CA-cAX_OY4Qp&tn=GEhT_otBo4RoQXMH&_nc_ht=scontent-mba1-1.xx&oh=00_AfC9eQjt_Nv1DTKbsAnb4ZyxaXZd47L6fVm6HYGqRNnnFA&oe=638A93BA",
      },
      {
        name: "Paul Mwaura",
        message:
          "David listened to our needs and wants for a new website before implementing them. For myself and our audiences, our new website is enjoyable, intriguing, and simple to use. I've previously had website redesigns, and by far, this one was the simplest and limited difficult. Every step of the way, I was respected and listened to. With our new website, we are overjoyed.",
        image:
          "https://media-exp1.licdn.com/dms/image/D4D03AQF7vD-r_NXuPw/profile-displayphoto-shrink_800_800/0/1669181607832?e=1675296000&v=beta&t=PUn3jO_tsJX5yhS3qpvj4V789UHzKQOQpqRopDzYVdM",
      },
      {
        name: "Imara Chorale",
        message:
          "Working with David Kimani is a pleasure since he is dependable and eager to go above and beyond to complete tasks on time and correctly. He is incredibly trustworthy and wise. I conducted interviews with a few of developers before selecting him to redesign our website, logo, and other materials.",
        image: "",
      },
      {
        name: "Faith Karimi",
        message:
          "Kimani assisted me with modernizing my website. I no longer need to hire a costly designer because I can now update my website myself thanks to his development expertise. I noticed a boost in my search engine rankings right away and no longer hesitate to suggest leads to my site.",
        image:
          "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/271856413_3332742423619789_1852061956306688452_n.jpg?stp=dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=GVjMjcF_v_0AX-Jwpj7&_nc_ht=scontent-mba1-1.xx&oh=00_AfCbrukKevcRJt9KiXZR0NjD5-OytkfCmJY2Dg2JLfXvnA&oe=6389F424",
      },
      {
        name: "Joseph Mbugua",
        message:
          "David is Techify's Senior Developer and Product Manager. He is in charge of a group of six people, including myself. He created my portfolio, which is the best I've seen so far. He is straightforward and gets things done. I would recommend him to anyone who requires clean work completed on time.",
        image: "",
      },
    ],
  }),
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xs;
    },
    itemsToShow() {
      if (this.isMobile) return 1;
      else return 2;
    },
  },
  components: {
    Hooper,
    Slide,
  },
};
</script>

<style></style>
