import { NbMenuItem } from '@nebular/theme';

// Retrieve and parse the user data from localStorage
const currentUser = localStorage.getItem('currentUser')?.toString();


let temp = [];
console.log(currentUser);
if (currentUser?.includes("ROLE_ADMIN")) {
  temp = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/pages/dashboard',
      home: true,
    },
    {
      title: 'FEATURES',
      group: true,
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
          title: 'All incidents',
          link: '/pages/tables/smart-table',
        }
      ],
    },
    {
      title: 'Incidents Manager',
      icon: 'edit-2-outline',
      children: [
        {
          title: 'Report new Incident',
          link: '/pages/forms/inputs',
        },
        {
          title: 'Assign new Tasks ',
          link: '/pages/tables/open-incidents',
        }
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
      icon: 'edit-2-outline',
      children: [
        {
          title: 'Assigned Incident',
          link: '/pages/tables/app-assigned-incidents',
        },{
          title: 'Solved Incidents',
          link: '/pages/tables/app-resolved-incidents',
        },
      ],
    }
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
          title: 'Assigned Tasks',
          link: '/pages/tables/assigned-tasks',
        },{
          title: 'Solved Tasks',
          link: '/pages/tables/solved-tasks',
        },
      ],
    },
  ];
}

export let MENU_ITEMS: NbMenuItem[] = temp ;

