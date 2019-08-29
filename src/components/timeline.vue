<template>
  <div>
    <v-timeline>
      <v-timeline-item v-for="(job, index) in jobs" :key="index" large>
        <template v-slot:icon>
          <a :href="job.companyLink" target="_blank">
            <v-avatar>
              <img class="companyLogo" :src="job.logo" />
            </v-avatar>
          </a>
        </template>
        <template v-slot:opposite>
          <div>{{ job.company }}</div>
          <div class="time">{{ job.time }}</div>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="headline">
            <h3>{{ job.title }}</h3>
          </v-card-title>
          <v-card-text>
            <textarea>{{ job.description }}</textarea>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  name: "timeline",
  props: {
    // companyImgSrc: String,
    // companyName: String,
    // title: String,
    // description: String
  },
  data() {
    return {
      jobs: [
        {
          company: "Vado",
          companyLink: "https://www.vado.com/",
          logo: require("../assets/imgs/vado.png"),
          title: "purchasing officer",
          time: "2017/4 ~ 2018/3",
          description:
            "JOB RESPONSIBILITIES:\n *Signing up and tracking PIs\n *Making up plans and arrangement of the schedule and transportation for QA stuff to do quality checks in suppliers' factories spreaded domestically.\n *Making up air and sea delivery plans, and communicating with delivering companies to track the goods.\n *Developing new suppliers and maintaining relationship with old ones by instime communicating and frequent visits.\n *Assisting office management like invoices, office supplies purchasing and deploying. "
        },
        {
          company: "FESCO LINES CHINA",
          companyLink: "https://www.fesco.ru/en/",
          logo: require("../assets/imgs/fesco.jpg"),
          title: "Accounting Assistant",
          time: "2016/5 ~ 2017/2",
          description:
            "JOB RESPONSIBILITIES:\n *Confirm with customers about the bills of lading and local charges through email, send invoices by delivery and track the payment; Keep an eye on the shipping schedule and container status, and inform realtive parties if any changes; Post ocean fee while protecting its cost to make it profitable for our destination port agents; Arrange telex releases, original bill or seaway bills when local charges received from customers; Collect necessary documents for the purpose of custome clearance, etc.\n *Inquire about the freight from Russian colleagues, check it with Chinese colleagues from Shanghai, Tianjin, Ningbo and Qingdao ports, and calculate and input the freight rate in system.\n Contact other branches’s colleagues and agents, located in Russia, Korea, Cyprus, Hong Kong, St Petersburg, etc, over the phone and by email to solve rate issues when there was mismatch occurred between the system and the SOA.\n *Provide weekly, monthly and quarterly freight rate report to colleagues in China and abroad， check with their customer service and accounting departments’ colleagues on invoices.\n \n KNOWLEDGE LEARNT & ACHIEVEMENTS:\n *FESCO is one of the leading public transportation and logistics companies in Russia with operations in ports, rail, integrated logistics and shipping business. FESCO LINES CHINA (FLC) is the headquarter company in China based in Shanghai. In FLC I was using English daily. It strengthened my organizational and communicational skills by teaching me how to organize documents and deal with a big quantity of information at once (every day I get hundreds of emails).\n \n *Except for get regular jobs done, I found ways to simplify excel work, establish better communication process with foreign and domestic colleagues, create guide books of rate-related issues, to improve work flow as well as work efficiency. The freight rate system was improved a lot to a great content."
        },
        {
          company: "KEJIAN HOLDING",
          companyLink: "https://www.kejianinc.com/",
          logo: require("../assets/imgs/kejian.png"),
          title: "Accounting Assistant",
          time: "2015/12 ~ 2016/4",
          description:
            "JOB RESPONSIBILITIES:\n *SEO and content management\n *Alibaba back-end management\n *Develop & maintain foreign customers\n *Document translation\n *Communicate with English branch company\n *Other work assigned\n \n KNOWLEDGE LEARNT AND ACHIEVEMENTS:\n *KEJIAN HOLDING is one of the largest manufacturers of sealant, vacuum consumables, waterproof membranes in china. During last ten years, it has been growing up rapidly and now it is aiming up its targets on foreign markets, and they were setting up a branch company in the UK. While I was in KEJIAN, I was taught how to use ERP systems and started understanding how different departments work together. I got training in Alibaba web optimization, approaches on getting customers, proper ways of talking to customers and suppliers, and how to edit and organize company’s websites, etc.\n \n *Back then I was pretty much the communication bridge between the Chinese headquarter and the UK branch company. Since the UK branch company was just built up, a tight and clear communication was necessary, and that was provided by me in ways of arranging net meeting, translating technical files and emails, sending products samples, etc. I was also helping with the managers apply for business visa.\n \n *As a marketing assistant, I was responsible for making our English-Chinese product brochure, editing, updating and maintaining our official websites, creating a bunch of free/paid company websites in popular international business platforms and social networking sites, and also posting, managing and analyzing Alibaba products\n \n *As an international trading assistant, I was honored to receive company’s biggest customer from America and provided great service. I also managed to get two new customers and they were in the process of their trial order."
        }
      ],

      education: [
        {
          major: "Educational English",
          school: "Huaiyin normal university",
          schoolWebsite: "http://www.hytc.edu.cn/",
          time: "2011/9 - 2015/6",
          details: ""
        },

        {
          major: "web front-end developing",
          school: "sololearn",
          schoolWebsite: "https://www.sololearn.com",
          time: "2018/8 ~ present",
          details: ""
        }
      ]
    };
  }
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}

.v-avatar {
  width: 48px;
  height: 48px;
}

.v-avatar img {
  border-radius: 0;
  object-fit: contain;
}

/* .elevation-2 .v-card-text {
  width: 100%;
  padding-right: 15px;
  box-sizing: content-box;
}
 */
textarea {
  width: 100%;
  min-height: 250px;
}
</style>
