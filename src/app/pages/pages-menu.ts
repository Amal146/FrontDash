import { NbMenuItem } from '@nebular/theme';

// Retrieve and parse the user data from localStorage
const currentUser = localStorage.getItem('currentUser')?.toString();


let temp = [];
if (currentUser?.includes("ROLE_ADMIN")) {
  temp = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/pages/dashboard',
      home: true,
    },
    // {
    //   title: 'IoT Dashboard',
    //   icon: 'pie-chart-outline',
    //   link: '/pages/iot-dashboard',
    // },
    {
      title: 'FEATURES',
      group: true,
    },
    {
      title: 'Data Center',
      icon: 'layout-outline',
      children: [
        // {
        //   title: 'Stepper',
        //   link: '/pages/layout/stepper',
        // },
        {
          title: 'Agents List',
          link: '/pages/layout/list',
        },{
          title: 'Applications List',
          link: '/pages/layout/app-list',
        },
        // {
        //   title: 'Infinite List',
        //   link: '/pages/layout/infinite-list',
        // },
        // {
        //   title: 'Accordion',
        //   link: '/pages/layout/accordion',
        // },
        // {
        //   title: 'Tabs',
        //   pathMatch: 'prefix',
        //   link: '/pages/layout/tabs',
        // },
      ],
    },
    {
      title: 'Assign Incidents',
      icon: 'edit-2-outline',
      children: [
        {
          title: 'New Incident Form',
          link: '/pages/forms/inputs',
        },
        {
          title: 'Affect new Tasks ',
          link: '/pages/forms/inputs',
        },
        // {
        //   title: 'Forms layouts',
        //   link: '/pages/forms/layouts',
        // },
        // {
        //   title: 'Buttons',
        //   link: '/pages/forms/buttons',
        // },
        // {
        //   title: 'Datepicker',
        //   link: '/pages/forms/datepicker',
        // },
      ],
    },
    // {
    //   title: 'UI Features',
    //   icon: 'keypad-outline',
    //   link: '/pages/ui-features',
    //   children: [
    //     {
    //       title: 'Grid',
    //       link: '/pages/ui-features/grid',
    //     },
    //     {
    //       title: 'Icons',
    //       link: '/pages/ui-features/icons',
    //     },
    //     {
    //       title: 'Typography',
    //       link: '/pages/ui-features/typography',
    //     },
    //     {
    //       title: 'Animated Searches',
    //       link: '/pages/ui-features/search-fields',
    //     },
    //   ],
    // },
    {
      title: 'Modal & Overlays',
      icon: 'browser-outline',
      children: [
        {
          title: 'Dialog',
          link: '/pages/modal-overlays/dialog',
        },
        {
          title: 'Window',
          link: '/pages/modal-overlays/window',
        },
        {
          title: 'Popover',
          link: '/pages/modal-overlays/popover',
        },
        {
          title: 'Toastr',
          link: '/pages/modal-overlays/toastr',
        },
        {
          title: 'Tooltip',
          link: '/pages/modal-overlays/tooltip',
        },
      ],
    },
    {
      title: 'Extra Components',
      icon: 'message-circle-outline',
      children: [
        {
          title: 'Calendar',
          link: '/pages/extra-components/calendar',
        },
        {
          title: 'Progress Bar',
          link: '/pages/extra-components/progress-bar',
        },
        {
          title: 'Spinner',
          link: '/pages/extra-components/spinner',
        },
        {
          title: 'Alert',
          link: '/pages/extra-components/alert',
        },
        {
          title: 'Calendar Kit',
          link: '/pages/extra-components/calendar-kit',
        },
        {
          title: 'Chat',
          link: '/pages/extra-components/chat',
        },
      ],
    },
    // {
    //   title: 'Maps',
    //   icon: 'map-outline',
    //   children: [
    //     {
    //       title: 'Google Maps',
    //       link: '/pages/maps/gmaps',
    //     },
    //     {
    //       title: 'Leaflet Maps',
    //       link: '/pages/maps/leaflet',
    //     },
    //     {
    //       title: 'Bubble Maps',
    //       link: '/pages/maps/bubble',
    //     },
    //     {
    //       title: 'Search Maps',
    //       link: '/pages/maps/searchmap',
    //     },
    //   ],
    // },
    // {
    //   title: 'Charts',
    //   icon: 'pie-chart-outline',
    //   children: [
    //     {
    //       title: 'Echarts',
    //       link: '/pages/charts/echarts',
    //     },
    //     {
    //       title: 'Charts.js',
    //       link: '/pages/charts/chartjs',
    //     },
    //     {
    //       title: 'D3',
    //       link: '/pages/charts/d3',
    //     },
    //   ],
    // },
    {
      title: 'Editors',
      icon: 'text-outline',
      children: [
        {
          title: 'TinyMCE',
          link: '/pages/editors/tinymce',
        },
        {
          title: 'CKEditor',
          link: '/pages/editors/ckeditor',
        },
      ],
    },
    {
      title: 'Tables & Data',
      icon: 'grid-outline',
      children: [
        {
          title: 'Smart Table',
          link: '/pages/tables/smart-table',
        },
        {
          title: 'Tree Grid',
          link: '/pages/tables/tree-grid',
        },
      ],
    }
  ];
  
}else if(currentUser?.includes("ROLE_MODERATOR")) {
  temp = [

    {
      title: 'Home',
      icon: 'home-outline',
      link: '/pages/dashboard',
      home: true,
    },
    {
      title: 'App Manager',
      icon: 'layout-outline',
      children: [
        {
          title: 'Assigned Incident',
          link: '/pages/tables/app-assigned-incidents',
        },{
          title: 'Solved Incidents',
          link: '/pages/layout/app-list',
        },
      ],
    },
    {
      title: 'Data Center',
      icon: 'layout-outline',
      children: [
        {
          title: 'Agents List',
          link: '/pages/layout/list',
        },{
          title: 'Applications List',
          link: '/pages/layout/app-list',
        },
        {
          title: 'Smart Table',
          link: '/pages/tables/smart-table',
        }
      ],
    },
  ];
  
}else {
  temp = [

    {
      title: 'Home',
      icon: 'home-outline',
      link: '/pages/dashboard',
      home: true,
    },
    {
      title: 'Report Incidents',
      icon: 'edit-2-outline',
      children: [
        {
          title: 'New Incident Form',
          link: '/pages/forms/inputs',
        }
      ]
      },
    {
      title: 'Task Manager',
      icon: 'layout-outline',
      children: [
        {
          title: 'Assigned Incident',
          link: '/pages/layout/list',
        },{
          title: 'Solved Incidents',
          link: '/pages/layout/app-list',
        },
      ],
    },
  ];
}

export const MENU_ITEMS: NbMenuItem[] = temp ;

