<template>
  <div :class="[`nav-theme-${navTheme}`, `nva-layout-${navLayout}`]">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider
        v-if="navLayout === 'left'"
        :theme="navTheme"
        v-model="collapsed"
        :trigger="null"
        collapsible
        width="256px"
      >
        <h1
          class="logo"
          :style="{
            color: navTheme === 'dark' ? '#FFF' : 'rgba(0, 0, 0, 0.85)'
          }"
        >
          {{ !collapsed ? "Vue Pro" : "" }}
        </h1>
        <SiderMenu :theme="navTheme" />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            v-auth="['admin']"
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
          <Header />
        </a-layout-header>
        <a-layout-content class="layoutContent">
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="textAlign: center">
          <Footer />
        </a-layout-footer>
      </a-layout>
    </a-layout>
    <Authorized :authority="['admin']">
      <SettingDrawer />
    </Authorized>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import SiderMenu from "./SiderMenu";
import SettingDrawer from "../components/SettingDrawer";

export default {
  name: "BasicLayout",
  components: {
    Header,
    Footer,
    SiderMenu,
    SettingDrawer
  },
  data() {
    return {
      collapsed: false
    };
  },
  computed: {
    navTheme() {
      return this.$route.query.navTheme || "dark";
    },
    navLayout() {
      return this.$route.query.navLayout || "left";
    }
  }
};
</script>

<style lang="less">
#components-layout-demo-custom-trigger {
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
  .logo {
    height: 32px;
    line-height: 32px;
    text-align: center;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
  .layoutContent {
    margin: 24px 16px;
    padding: 24px;
    background: #fff;
    min-height: calc(100vh - 181px);
  }
}
</style>
