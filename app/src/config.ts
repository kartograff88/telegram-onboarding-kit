import { defineConfig } from '@tok/generation';

export default defineConfig({
  // If you want to add language/currency localization – see ./examples/meditation as reference

  pages: [
    {
      slides: [
        // intro
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/1.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Отправляй видео',
          description:
            'По возможности отправляй нам видео своего образа. Лук в динамике лучше отражает суть, его проще полноценно рассмотреть и оценить в движении.',
          button: 'Дальше',
        },

        // image
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/2.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Добавляй больше фото',
          description:
            'Прикрепляй больше фото 😉 У нас нет ограничений на кол-во загружаемых фото для одного лука. Больше фото --> больше ракурсов и деталей, на которые обратят внимание стилисты --> лучше разбор от стилиста. По одной фото бывает очень сложно написать хороший разбор.',
          button: 'Дальше',
        },

        // sticker
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/3.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Добавляй контекст',
          description:
            'Добавь комментарий к отправляемому луку. Например, куда планируешь надевать или идти в образе. Можно добавить информацию о себе и своих предпочтениях. Так у стилистов будет больше деталей, на которые они обратят внимание и учтут при составлении своих рекомендаций. Также можно задавать свои вопросы через комментарии, на которые ответит стилист.',
          button: 'Дальше',
        },
        // sticker
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/4.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Подпишись на наш канал',
          description: `@Lookwhiz, там ты найдешь:`,
          textAlign: 'center',
          list: [
            'больше информации о нас и наших проектах',
            'доп инфо о стилистах, их мнения и рекомендации',
            'много полезного о мире моды и стиля от участников комьюнити Lookwhiz',
            'луки и разборы',
            'новости и обновления проекта',
          ],
          button: {
            content: 'В начало',
            to: '/',
          },
        },
        // video
        // {
        //   media: {
        //     type: 'video',
        //     src: import('./assets/videos/spongebob.mp4'),
        //     poster: import('./assets/img/spongebob_poster.webp'),
        //     style: 'aspect-ratio: 400/287', // here we manually set video aspect-ratio (default is 16:9)
        //   },
        //   shape: 'rounded',
        //   pagination: 'count',
        //   title: 'Videos',
        //   description:
        //     "Typically, video starts <b>automatically</b><br><br>However, on iOS, it will only autoplay upon any prior tap on the page ('Next' button doesn't count). If video doesn't autoplay, user will see preview and pretty animation, inviting them to tap to play the video",
        //   button: 'Next',
        // },

        // list
        // {
        //   media: {
        //     type: 'sticker',
        //     src: import('./assets/stickers/duck_juggling.tgs'),
        //     size: 150,
        //   },
        //   shape: 'square',
        //   pagination: 'count',
        //   title: 'Lists',
        //   description:
        //     'Lists can be used to showcase <b>features</b> of your product. Items support customizable icons',
        //   list: [
        //     {
        //       media: {
        //         type: 'icon',
        //         src: import('./assets/icons/guide.svg'),
        //         size: 30,
        //       },
        //       text: 'Some cool feature',
        //     },
        //     {
        //       media: {
        //         type: 'icon',
        //         src: import('./assets/icons/track.svg'),
        //         size: 30,
        //       },
        //       text: 'Some very cool feature',
        //     },
        //     {
        //       media: {
        //         type: 'icon',
        //         src: import('./assets/icons/time.svg'),
        //         size: 30,
        //       },
        //       text: 'Some extremely cool feature',
        //     },
        //   ],
        //   button: 'Next',
        // },

        // "everything is customizable" slide
        // {
        //   media: {
        //     type: 'sticker',
        //     src: import('./assets/stickers/duck_xray.tgs'),
        //     size: 250,
        //   },
        //   shape: 'square',
        //   pagination: 'count',
        //   title: 'Everything is customizable',
        //   description: '',
        //   textAlign: 'center',
        //   list: [
        //     '<b>CSS styles</b>: extend primary colors from Telegram or set yours',
        //     'Button text and actions (look down)',
        //     'Use our carefully crafted <b>presets</b> or easily create your own',
        //   ],
        //   button: 'Super-Duper Next',
        // },

        // slide with other features
        // {
        //   media: {
        //     type: 'sticker',
        //     src: import('./assets/stickers/duck_cool.tgs'),
        //     size: 150,
        //   },
        //   shape: 'square',
        //   pagination: 'count',
        //   title: 'Some other features:',
        //   description: '',
        //   list: [
        //     'One-click 0$ <b>deploy</b> on GitHub Pages',
        //     'Language and currency localization',
        //     'Buttons with <b>haptic</b> feedback',
        //     'Content pre-loading for high speed',
        //     '<b>Low-code</b> approach to building onboardings',
        //     'Many examples/presets',
        //     "And many more... (see <a href='https://github.com/Easterok/telegram-onboarding-kit' target='_blank'>GitHub</a>)",
        //   ],
        //   button: 'Next',
        // },

        // go to paywall slide
        // {
        //   media: {
        //     type: 'sticker',
        //     src: import('./assets/stickers/duck_knife.tgs'),
        //     size: 250,
        //   },
        //   shape: 'square',
        //   pagination: 'count',
        //   textAlign: 'center',
        //   title: 'But onboarding slides are not enough...',
        //   description: "Let's go to Paywall",
        //   button: {
        //     content: 'Go to Paywall',
        //     to: '/paywall',
        //   },
        // },
      ],
    },

    // paywall
    // {
    //   extends: 'paywall',
    //   path: '/paywall',
    //   media: {
    //     type: 'sticker',
    //     src: import('./assets/stickers/duck_money.tgs'),
    //     size: 150,
    //   },
    //   shape: 'square',
    //   title: 'Your beautiful Paywall',
    //   list: [
    //     'Adjustable product cards',
    //     '<b>👛 Wallet Pay</b> and <b>Telegram Payments</b> ready. Add custom methods easily',
    //     'Subscriptions or One-time payments',
    //   ],
    //   products: [
    //     {
    //       id: '1_month_subscription',
    //       title: '1 month subscription',
    //       description: '2$/month',
    //       discount: '',
    //       price: 2,
    //     },
    //     {
    //       id: '1_year_subscription',
    //       title: '1 year subscription',
    //       description: '1$/month',
    //       discount: 'Discount 50%',
    //       price: 12,
    //     },
    //     {
    //       id: 'lifetime_access',
    //       title: 'Lifetime access',
    //       description: '20$ once',
    //       discount: 'Best offer',
    //       price: 20,
    //     },
    //   ],
    //   mainButtonText: 'Buy for {price}',
    //   popup: {
    //     // popup for payment methods choice
    //     type: 'web',
    //   },
    //   links: [
    //     {
    //       text: 'Privacy policy',
    //       href: 'https://google.com',
    //     },
    //     {
    //       text: 'Terms of use',
    //       href: 'https://google.com',
    //     },
    //   ],
    // },
  ],
});
