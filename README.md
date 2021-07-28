# Oompa Lompa's Crew

This project is a requirement to develop a web application to manage the Oompa Loompa 's crew of Willy Wonka's chocolate factory.
This project has been developed for a Frontend technical assignment.

## Screenshoot

![home](https://user-images.githubusercontent.com/39586833/127396822-35078e61-e4b9-4e07-8670-3d9a2d4e46a6.png)

![detail](https://user-images.githubusercontent.com/39586833/127396913-129905c1-3cac-452e-9c98-1dc4ed0bc41a.png)

## Functional and Technical Description

As soon as we get into the **List view**, it is showing a list of Oompaa Loompas.
if more than one day has passed since the last time it was requested, the **List** is fetching with Axios, the list of the members are storage in the context app in order to access to this data globally and also, in the local storage for further views. If not, the app get the list from the localStorage. The list have an **endless scroll** with an IntersectionObserver that allows us to detect the intersection ratio with the scroll down and execute the callback function hook **useFetch** to get more data. Also, the view has a search bar that allows the user to find a crew member with an immediate effect using the 'onChange'input event.

When an Oompa Loompa is clicked, the router navigates to the **Details view**. As I did in the List view, with the id provided in the router parameter, details are fetching with Axios and storage in the context and also in the localStorage. Some member details are showing in this view like name, gender or profession, but I had to use the **dangerouslySetInnerHTML** prop to replace the string HTML tags and sanitize data.

Finally, if user cliks in the icon header, the website go back to the main view. 

## Technologies

The front-end is created using ReactJS with Hooks, project instaled with "create-react-app". Styled with SCSS.
Also, the following JS third party libraries are installed in the project, as:

  - "react-spinners" and "react-loading-overlay" : Loader style and animations
  - "react-router-dom": Router
  - "axios": Fetch data


### Components and Pages

App:
- Components:
    - CrewDetails
    - CrewList:
        - CrewCard
    - Header
    - Loader
    - SearchBar
- Context
- hook (useFetch)
- views:
    - List
    - Details

## Author

[Silvia Barranco](https://github.com/sbarranco)
