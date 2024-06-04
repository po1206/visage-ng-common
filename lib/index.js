'use strict';

/**
 * @ngdoc overview
 * @name visageNgCommon
 * @description
 * # visageNgCommon
 *
 * Common module of visage back and front office.
 */

angular
  .module('visageNgCommon', [
    'ngAnimate',
    'ngResource',
    'ngMaterial',
    'ngFileUpload',
    'visageNgCommon.config',
    'ngWig'
  ])
  .config(['ngWigToolbarProvider', function (ngWigToolbarProvider) {
    ngWigToolbarProvider.setButtons(['formats', 'list1', 'list2', 'bold', 'italic', 'link']);
  }])
  .constant('endpointsApi', {
    jobOffers: '/job-offers',
    publicJobOffers : '/public-job-offers',
    extJobOffers: '/ext-job-offers',
    users: '/users',
    recruiters: '/recruiters',
    experts: '/experts',
    preferences: '/preferences',
    candidates: '/candidates',
    checkout: '/checkout.php',
    verify: '/verify.php',
    media: '/media',
    mail: '/services/mail',
    invitations: '/invitations',
    assignments: '/assignments',
    expertAssignments :'/expert-assignments',
    recruiterAssignments : '/recruiter-assignments',
    secretPaymentToken: '/services/secret-payment-token',
    extRecruiters: '/ext-recruiters',
    search : '/search',
    cvValidation: '/media/validation/cv'
  })
  .constant('localApi', {
    countries: 'data/countries.json',
    jobRoles: 'data/job-roles.json',
    industries: 'data/industries.json',
    employmentType: 'data/employment-type.json',
    employmentStatus: 'data/employment-status.json',
    salaryRange: 'data/salary-range.json',
    jobStatus: 'data/job-status.json',
    availability: 'data/availability.json',
    areas: 'data/areas.json',
    candidateReviewReasons:'data/candidate-review-reasons.json'
  })
  .constant('candidateRating', {
    qualified: 'QUALIFIED',
    disqualified: 'DISQUALIFIED',
    outstanding: 'OUTSTANDING',
    shortlisted: 'SHORTLISTED'
  })
  .constant('auth0constants', {
    domain: 'visage.auth0.com'
  })
  .constant('apiSettings', {
    candidatesReviewLimit : 60
  })
  .run(function ($templateCache) {
    //cache some images
    $templateCache.put('/images/icons/ic_nationality.svg',
      '<svg id="svg2" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" height="71.833" viewBox="0 0 71.837503 71.833122" width="71.838" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/"><g id="g10" transform="matrix(1.25 0 0 -1.25 -469.97 531.85)"><g id="g270" fill="#757575" transform="translate(425.49 380.74)"><path id="path272" d="m0 0c-2.936 0.699-6.067 1.226-9.335 1.577 0.925 4.273 1.406 8.693 1.433 13.183h13.308c-0.256-5.348-2.139-10.52-5.406-14.76m-12.594-8.915c1.086 2.617 1.981 5.311 2.689 8.046 2.807-0.291 5.507-0.714 8.063-1.268-2.968-3.109-6.679-5.442-10.752-6.778m-13.305-0.808c-1.309 2.883-2.378 5.877-3.201 8.93 5.807 0.494 11.397 0.539 16.672 0.136-0.822-3.08-1.9-6.109-3.24-9.067-3.329-0.664-6.891-0.665-10.231 0.001m-13.784 7.541c1.754 0.326 4.561 0.789 8.062 1.168 0.705-2.696 1.589-5.348 2.65-7.902-4.052 1.329-7.75 3.646-10.712 6.734m-7.289 16.942h13.309c0.027-4.57 0.52-9.039 1.465-13.328-4.626-0.512-7.977-1.151-9.358-1.438-3.271 4.242-5.159 9.414-5.416 14.766m5.411 17.26c1.399-0.291 4.832-0.946 9.575-1.455-0.97-4.441-1.525-8.905-1.651-13.312h-13.335c0.257 5.352 2.14 10.526 5.411 14.767m12.64 8.927c-0.703-1.815-1.648-4.533-2.511-7.933-3.591 0.377-6.467 0.849-8.251 1.181 2.974 3.1 6.688 5.424 10.762 6.752m13.26 0.788c0.586-1.343 1.886-4.566 3.047-9.084-5.167-0.382-10.633-0.333-16.299 0.145 1.164 4.483 2.444 7.648 3.006 8.939 3.338 0.669 6.9 0.67 10.246 0m13.816-7.582c-2.634-0.57-5.396-1.003-8.249-1.294-0.867 3.462-1.833 6.24-2.55 8.088 4.09-1.333 7.819-3.673 10.799-6.794m-29.298-16.9c0.129 4.333 0.683 8.723 1.657 13.089 3.352-0.293 6.649-0.462 9.852-0.462 2.593 0 5.119 0.115 7.589 0.307 0.952-4.289 1.494-8.626 1.622-12.934h-20.72zm19.309-15.451c-5.641 0.456-11.637 0.41-17.866-0.14-0.95 4.207-1.443 8.6-1.471 13.098h20.776c-0.027-4.419-0.508-8.765-1.439-12.958m17.24 15.451h-13.335c-0.124 4.382-0.667 8.794-1.616 13.157 3.315 0.351 6.515 0.886 9.539 1.602 3.269-4.24 5.155-9.409 5.412-14.759m-3.971 16.973-0.386 0.455h-0.006c-4.017 4.718-9.521 8.036-15.555 9.37-4.062 0.917-8.482 0.916-12.536 0.001-6.039-1.334-11.542-4.653-15.561-9.371l-0.392-0.455c-4.202-5.118-6.517-11.588-6.517-18.219s2.315-13.101 6.517-18.22l0.386-0.455h0.006c4.019-4.718 9.522-8.037 15.555-9.369 2.031-0.459 4.141-0.691 6.271-0.691 2.131 0 4.24 0.232 6.265 0.689 6.04 1.335 11.544 4.653 15.561 9.371l0.392 0.455c4.203 5.119 6.517 11.589 6.517 18.22s-2.314 13.101-6.517 18.219" fill="#757575"/></g></g></svg>'
    );


  });
