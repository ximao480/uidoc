<style lang="less">
    @import "../styles/index2020.less";
</style>
<template>
    <div class="index" id="index">
        <div class="index-main">
            <img src="../images/burgeon.png" class="index-logo">
            <div class="index-search">
                <i-select
                        ref="select"
                        v-model="search"
                        filterable
                        :placeholder="searchText"
                        :not-found-text="notFoundText"
                        @on-change="handleSearch">
                    <i-option v-for="item in navigateList" :key="item.path" :value="item.path">
                        <template v-if="lang === 'zh-CN'">{{ item.title }}</template>
                        <template v-else>{{ item.title.split(' ')[0] }}</template>
                    </i-option>
                </i-select>
            </div>
            <row type="flex" justify="center" align="middle" class="index-container">
                <i-col span="24">
                    <img src="../images/2020new year welcom_logo.png" class="index-title">
                    <div class="index-content">{{ $t('index.title1') }}</div>
                    <div class="index-content">{{ $t('index.title2') }}</div>
                    <div class="index-actions">
                        <Button class="index-btn" size="large" type="primary" shape="circle" :to="handleGoToMenu('/docs/guide/install')">{{ $t('index.start') }}</Button>
                        <Button class="index-btn" size="large" type="primary" shape="circle" :to="handleGoToMenu('/bcl/start')">{{ $t('index.componentPro') }}</Button>
                        <!-- <Button class="index-btn" size="large" type="primary" shape="circle" ghost icon="ios-construct" to="https://dev.iviewui.com" target="_blank" v-if="lang === 'zh-CN'">开发者社区</Button>
                        <Button class="index-btn" size="large" type="primary" shape="circle" ghost icon="logo-github" to="https://github.com/iview/iview" target="_blank">GitHub</Button> -->
                    </div>
                </i-col>
            </row>
        </div>
        <!-- <div class="index-bg-footer">
            <img src="../images/bg-index-footer.png">
        </div> -->
        <!-- <div class="index-extra">
            <Select size="small" value="3" style="width: 60px;margin: 0 10px;" @on-change="handleVersion">
                <Option value="3">3.x</Option>
                <Option value="2">2.x</Option>
                <Option value="1">1.x</Option>
            </Select>

            <Button size="small" @click="handleChangeLang">
                <template v-if="lang === 'zh-CN'">English</template>
                <template v-else>中文</template>
            </Button>
        </div> -->
    </div>
</template>
<script>
  class Vector2 {
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }

    add(v) {
      this.x += v.x;
      this.y += v.y;
      return this;
    }

    multiplyScalar(s) {
      this.x *= s;
      this.y *= s;
      return this;
    }

    clone() {
      return new Vector2(this.x, this.y);
    }
  }

  class Time {
    constructor() {
      const now = Time.now();

      this.delta = 0;
      this.elapsed = 0;
      this.start = now;
      this.previous = now;
    }

    update() {
      const now = Time.now();

      this.delta = now - this.previous;
      this.elapsed = now - this.start;
      this.previous = now;
    }

    static now() {
      return Date.now() / 1000;
    }
  }

  class Particle {
    constructor(position, velocity = new Vector2, color = 'white', radius = 1, lifetime = 1, mass = 1) {
      this.position = position;
      this.velocity = velocity;
      this.color = color;
      this.radius = radius;
      this.lifetime = lifetime;
      this.mass = mass;

      this.isInCanvas = true;
      this.createdOn = Time.now();
    }

    update(time) {
      if (!this.getRemainingLifetime()) {
        return;
      }

      this.velocity.add(Particle.GRAVITATION.clone().multiplyScalar(this.mass));
      this.position.add(this.velocity.clone().multiplyScalar(time.delta));
    }

    render(canvas, context) {
      const remainingLifetime = this.getRemainingLifetime();

      if (!remainingLifetime) return;

      const radius = this.radius * remainingLifetime;

      context.globalAlpha = remainingLifetime;
      context.globalCompositeOperation = 'lighter';
      context.fillStyle = this.color;

      context.beginPath();
      context.arc(this.position.x, this.position.y, radius, 0, Math.PI * 2);
      context.fill();
    }

    getRemainingLifetime() {
      const elapsedLifetime = Time.now() - this.createdOn;
      return Math.max(0, this.lifetime - elapsedLifetime) / this.lifetime;
    }
  }

  Particle.GRAVITATION = new Vector2(0, 9.81);

  class Trail extends Particle {
    constructor(childFactory, position, velocity = new Vector2, lifetime = 1, mass = 1) {
      super(position, velocity);

      this.childFactory = childFactory;
      this.children = [];
      this.lifetime = lifetime;
      this.mass = mass;

      this.isAlive = true;
    }

    update(time) {
      super.update(time);

      // Add a new child on every frame
      if (this.isAlive && this.getRemainingLifetime()) {
        this.children.push(this.childFactory(this));
      }

      // Remove particles that are dead
      this.children = this.children.filter(function(child) {
        if (child instanceof Trail) {
          return child.isAlive;
        }

        return child.getRemainingLifetime();
      });

      // Kill trail if all particles fade away
      if (!this.children.length) {
        this.isAlive = false;
      }

      // Update particles
      this.children.forEach(function(child) {
        child.update(time);
      });
    }

    render(canvas, context) {
      // Render all children
      this.children.forEach(function(child) {
        child.render(canvas, context);
      });
    }
  }

  class Rocket extends Trail {
    constructor(childFactory, explosionFactory, position, velocity = new Vector2) {
      super(childFactory, position, velocity);

      this.explosionFactory = explosionFactory;
      this.lifetime = 10;
    }

    update(time) {
      if (this.getRemainingLifetime() && this.velocity.y > 0) {
        this.explosionFactory(this);
        this.lifetime = 0;
      }

      super.update(time);
    }
  }

  const canvas = document.createElement('canvas');
  canvas.style.position = 'absolute';
  canvas.style.top = 0;
  canvas.style.bottom = 0;
  canvas.style.overflow = 'hidden';
  const context = canvas.getContext('2d');
  const time = new Time;
  let rockets = [];

  const getTrustParticleFactory = function(baseHue) {
    function getColor() {
      const hue = Math.floor(Math.random() * 15 + 30);
      return `hsl(${hue}, 100%, 75%`;
    }

    return function(parent) {
      const position = this.position.clone();
      const velocity = this.velocity.clone().multiplyScalar(-.1);
      velocity.x += (Math.random() - .5) * 8;
      const color = getColor();
      const radius = 1 + Math.random();
      const lifetime = .5 + Math.random() * .5;
      const mass = .01;

      return new Particle(position, velocity, color, radius, lifetime, mass);
    };
  };

  const getExplosionFactory = function(baseHue) {
    function getColor() {
      const hue = Math.floor(baseHue + Math.random() * 15) % 360;
      const lightness = Math.floor(Math.pow(Math.random(), 2) * 50 + 50);
      return `hsl(${hue}, 100%, ${lightness}%`;
    }

    function getChildFactory() {
      return function(parent) {
        const direction = Math.random() * Math.PI * 2;
        const force = 8;
        const velocity = new Vector2(Math.cos(direction) * force, Math.sin(direction) * force);
        const color = getColor();
        const radius = 1 + Math.random();
        const lifetime = 1;
        const mass = .1;

        return new Particle(parent.position.clone(), velocity, color, radius, lifetime, mass);
      };
    }

    function getTrail(position) {
      const direction = Math.random() * Math.PI * 2;
      const force = Math.random() * 128;
      const velocity = new Vector2(Math.cos(direction) * force, Math.sin(direction) * force);
      const lifetime = .5 + Math.random();
      const mass = .075;

      return new Trail(getChildFactory(), position, velocity, lifetime, mass);
    }

    return function(parent) {
      let trails = 32;
      while (trails--) {
        parent.children.push(getTrail(parent.position.clone()));
      }
    };
  };

  const addRocket = function() {
    const trustParticleFactory = getTrustParticleFactory();
    const explosionFactory = getExplosionFactory(Math.random() * 360);

    const position = new Vector2(Math.random() * canvas.width, canvas.height);
    const thrust = window.innerHeight * .75;
    const angle = Math.PI / -2 + (Math.random() - .5) * Math.PI / 8;
    const velocity = new Vector2(Math.cos(angle) * thrust, Math.sin(angle) * thrust);
    const lifetime = 3;

    rockets.push(new Rocket(trustParticleFactory, explosionFactory, position, velocity, lifetime));

    rockets = rockets.filter(function(rocket) {
      return rocket.isAlive;
    });
  };

  const render = function() {
    requestAnimationFrame(render);

    time.update();
    context.clearRect(0, 0, canvas.width, canvas.height);

    rockets.forEach(function(rocket) {
      rocket.update(time);
      rocket.render(canvas, context);
    });
  };

  const resize = function() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
  };

  import bus from '../../src/components/bus';
  import navigate from '../config/navigate';
  import Config from '../config/config';

  export default {
    data () {
      return {
        lang: this.$lang,
        searchText: this.$t('index.search'),
        notFoundText: this.$t('index.notFound'),
        navigateList: [],
        search: '',
      }
    },
    computed: {
      suffix () {
        return this.lang === 'zh-CN' ? '' : '-en';
      }
    },
    methods: {
      handleChangeLang () {
        const lang = this.lang === 'zh-CN' ? 'en-US' : 'zh-CN';
        bus.$emit('on-change-lang', lang, '/');
      },
      handleVersion (v) {
        if (v == 1) {
          window.location.href = 'http://v1.iviewui.com';
        }
        if (v == 2) {
          window.location.href = 'http://v2.iviewui.com';
        }
      },
      handleGoToMenu (name) {
        if (this.lang === 'zh-CN') {
          return name;
        } else {
          return name + '-en';
        }
      },
      handleSearch (path) {
        if (this.lang === 'en-US') path += '-en';
        this.search = '';
        this.$refs.select.setQuery(null);
        this.$router.push(path);  //谢世华修改
        // this.$nextTick(() => {
        //     this.$router.push(path);
        // });
      },
    },
    mounted () {
      this.lang = this.$lang;

      canvas.onclick = addRocket;
      document.getElementById('index').appendChild(canvas);

      window.onresize = resize;
      resize();

      setInterval(addRocket, 2000);
      render();
    },
    created () {
      this.lang = this.$lang;
      let list = [];
      for (let i = 0; i < navigate.components.length; i++) {
        for (let j = 0; j < navigate.components[i].list.length; j++) {
          list.push(navigate.components[i].list[j]);
        }
      }
      this.navigateList = list;
    }
  }
</script>
