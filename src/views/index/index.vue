<template>
  <div class="index-box">
    <div class="heard">
      <img src="@/assets/images/icon.svg" class="header__icon">
      <div class="header__nav-bar">
        <ul>
          <li
            v-for="(item, index) in navigationList"
            :key="index"
            @click="item.name == 'GIT HUB' ? goToGitHub() : ''">
            <router-link :to="item.location">{{item.name}}</router-link>
          </li>
        </ul>
        <p class="hello">hello world !!!</p>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navigationList: [
        {
          name: "BLOG",
          location: "/blog"
        },
        // {
        //   name: 'LEARN',
        //   location: '/learn',
        // },
        {
          name: "GIT HUB",
          location: ""
        }
      ]
    };
  },
  created() {},
  methods: {
    /**
     * 前往gitHub
     */
    goToGitHub() {
      // window.open("https://github.com/YShaoHua");
    }
  }
};
</script>

<style lang="stylus" scoped>
.index-box {
  .heard {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100%;
    border-bottom: 1px solid rgba(220, 220, 220, 0.1);
    box-shadow: 0 3px 7px -1px rgba(220, 220, 220, 0.2);

    .header__icon {
      height: 30px;
      width: 30px;
    }

    .header__nav-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-width: 1000px;

      ul {
        display: flex;
        align-items: center;

        li {
          list-style-type: none;
          margin: 0 40px;
          font-weight: bold;

          a {
            font-size: 16px;
            color: #888;
          }
        }
      }

      .hello {
        font-size: 26px;
        color: rgba(175, 47, 47, 0.15);
      }
    }
  }
}
</style>
