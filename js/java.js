const icon = document.getElementById('arrow-icon');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { 
            icon.style.visibility = 'visible';
            icon.style.opacity = '1';
        } else {
            icon.style.visibility = 'hidden';
            icon.style.opacity = '0';
        }
    }, { passive: true });

    document.addEventListener('DOMContentLoaded', function () {
      const counters = document.querySelectorAll('.counter');
  
      counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          let count = 0;
          const increment = target / 100; 
  
          const updateCounter = () => {
              if (count < target) {
                  count += increment;
                  counter.innerText = Math.ceil(count);
                  setTimeout(updateCounter, 20);
              } else {
                  counter.innerText = target; 
              }
          };
  
          updateCounter();
      });
  });
  

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items : 2,
    margin :20,
    nav : false ,
    responsive: {
      0: {            // For very small screens, like mobile devices
        items: 1      // Show only 1 item
      },
      768: {          // For tablets and medium devices
        items: 2      // Show 2 items
      },
      1200: {         // For large screens, desktops
        items: 3      // Show 3 items
      }
    }
    //navText: ['<i class="fa-solid fa-arrow-left  text-center mt-5  rounded-start-pill px-4 m-0 me-5 border border-1 border-danger py-2 bg-danger text-white"></i>', '<i class="fa-solid fa-arrow-right rounded-end-pill px-4 py-2 m-0 border border-1 border-danger bg-danger text-white"></i>'],
  }
  );
});

function updateFileName() {
  const input = document.getElementById("formFile");
  const fileNameSpan = document.getElementById("fileName");
  fileNameSpan.textContent = input.files.length > 0 ? input.files[0].name : "No file chosen";
}
document.addEventListener('DOMContentLoaded', function () {
  const filterItems = document.querySelectorAll('.filter-item');
  const filters = document.querySelectorAll('.filter');

  // Initialize all carousels but keep them hidden initially
  $('#carousel1').owlCarousel({
    items : 2,
    margin :20,
    nav : false ,
    responsive: {
      0: {            // For very small screens, like mobile devices
        items: 1      // Show only 1 item
      },
      768: {          // For tablets and medium devices
        items: 2      // Show 2 items
      },
      1200: {         // For large screens, desktops
        items: 3      // Show 3 items
      }
    }
    //navText: ['<i class="fa-solid fa-arrow-left  text-center mt-5  rounded-start-pill px-4 m-0 me-5 border border-1 border-danger py-2 bg-danger text-white"></i>', '<i class="fa-solid fa-arrow-right rounded-end-pill px-4 py-2 m-0 border border-1 border-danger bg-danger text-white"></i>'],
  }
  );

  $('#carousel2').owlCarousel({
    items : 2,
    margin :20,
    nav : false ,
    responsive: {
      0: {            // For very small screens, like mobile devices
        items: 1      // Show only 1 item
      },
      768: {          // For tablets and medium devices
        items: 2      // Show 2 items
      },
      1200: {         // For large screens, desktops
        items: 3      // Show 3 items
      }
    }
    //navText: ['<i class="fa-solid fa-arrow-left  text-center mt-5  rounded-start-pill px-4 m-0 me-5 border border-1 border-danger py-2 bg-danger text-white"></i>', '<i class="fa-solid fa-arrow-right rounded-end-pill px-4 py-2 m-0 border border-1 border-danger bg-danger text-white"></i>'],
  }
  );

  $('#carousel3').owlCarousel({
    items : 2,
    margin :20,
    nav : false ,
    responsive: {
      0: {            // For very small screens, like mobile devices
        items: 1      // Show only 1 item
      },
      768: {          // For tablets and medium devices
        items: 2      // Show 2 items
      },
      1200: {         // For large screens, desktops
        items: 3      // Show 3 items
      }
    }
    //navText: ['<i class="fa-solid fa-arrow-left  text-center mt-5  rounded-start-pill px-4 m-0 me-5 border border-1 border-danger py-2 bg-danger text-white"></i>', '<i class="fa-solid fa-arrow-right rounded-end-pill px-4 py-2 m-0 border border-1 border-danger bg-danger text-white"></i>'],
  }
  );
   
  $('#carousel4').owlCarousel({
    items : 2,
    margin :20,
    nav : false ,
    responsive: {
      0: {            // For very small screens, like mobile devices
        items: 1      // Show only 1 item
      },
      768: {          // For tablets and medium devices
        items: 2      // Show 2 items
      },
      1200: {         // For large screens, desktops
        items: 3      // Show 3 items
      }
    }
    //navText: ['<i class="fa-solid fa-arrow-left  text-center mt-5  rounded-start-pill px-4 m-0 me-5 border border-1 border-danger py-2 bg-danger text-white"></i>', '<i class="fa-solid fa-arrow-right rounded-end-pill px-4 py-2 m-0 border border-1 border-danger bg-danger text-white"></i>'],
  }
  );

  // Handle filter click events
  filterItems.forEach(item => {
    item.addEventListener('click', function () {
      const filterValue = this.getAttribute('data-filter');

      // Remove 'active' class from all filter items
      filterItems.forEach(i => i.classList.remove('active'));

      // Add 'active' class to the clicked filter item
      this.classList.add('active');

      // Show or hide carousels based on filter
      filters.forEach(filter => {
        if (filter.classList.contains(filterValue)) {
          filter.style.display = 'block'; // Show matching carousel
        } else {
          filter.style.display = 'none'; // Hide non-matching carousels
        }
      });
    });
  });

  // Optional: Show a default carousel (e.g., the first one) when the page loads
  document.querySelector('[data-filter="Presidential-inaugurations"]').click();
});



function toggleLanguage(language) {
  const textElement = document.getElementById('aboutText');
  const sectionContact = document.getElementById('sectionContact');
  
  if (language === 'ar') {
    // Set text to RTL
    textElement.classList.remove('ltr');
    textElement.classList.add('rtl');
    sectionContact.classList.remove('ltr');
    sectionContact.classList.add('rtl');
    textElement.classList.add('arabic-font');
        // Set Arabic text
      document.getElementById('openHours').textContent = 'مفتوح: الأحد - الخميس: ٤ - ٩';
      document.getElementById('location').textContent = 'المقطم، محافظة القاهرة ٤٢٥٤٠٠٥';
      document.getElementById('quickEmail').textContent = 'البريد السريع';
      document.getElementById('phoneNumber').textContent = '+٤٧٨٥-٧٨٩ (٤٠٩) ١';
      document.getElementById('navHome').textContent = 'الرئيسية';
      document.getElementById('navServices').textContent = 'الخدمات';
      document.getElementById('navClients').textContent = 'عملاؤنا';
      document.getElementById('navNews').textContent = 'الصحافة والأخبار';
      document.getElementById('navProjects').textContent = 'المشاريع';
      document.getElementById('navContact').textContent = 'اتصل بنا';
      document.getElementById('navCareer').textContent = 'وظيفة';
      document.getElementById('navLanguage').textContent = 'اللغة';
      document.getElementById('offcanvasNavbarLabel').textContent = 'حراء';
      document.getElementById('navHomeMobile').textContent = 'الرئيسية';
      document.getElementById('navServicesMobile').textContent = 'الخدمات';
      document.getElementById('navNewsMobile').textContent = 'الصحافة والأخبار';
      document.getElementById('navProjectsMobile').textContent = 'المشاريع';
      document.getElementById('navClientsMobile').textContent = 'عملاؤنا';
      document.getElementById('navContactMobile').textContent = 'اتصل بنا';
      document.getElementById('navCareerMobile').textContent = 'وظيفة'
      document.getElementById('navLanguageMobile').textContent = 'اللغة';
      document.getElementById('aboutCompanyName').textContent = 'حراء';
      document.getElementById('aboutTagline').textContent = 'البناء والتوريدات';
      document.getElementById('aboutDescription').textContent = 'تأسست في عام ١٩٩٢، نمت شركة حراء للمقاولات والتوريدات بثبات لتصبح رائدة في مجالها. مع رؤية واضحة وأهداف محددة، تبرز الشركة بين الآخرين، وتجنب الخطوات العشوائية والتركيز بدلاً من ذلك على مسار هادف للنجاح. تشمل المبادئ الأساسية لحراء النجاح والاستمرارية والتقدم الرائد.';
      document.getElementById('aboutVisionTitle').textContent = 'رؤية';
      document.getElementById('aboutVisionDescription').textContent = 'أن نكون قادة بأهداف واضحة، وتحقيق الابتكار، ووضع معايير جديدة في مجال المقاولات والتوريدات. في عالم سريع التغير، تبرز حراء - تتقدم بثبات وليس بدون هدف، ولكن برؤية واتجاه محددين.';
      document.getElementById('aboutGoalsTitle').textContent = 'أهدافنا';
      document.getElementById('aboutGoalsDescription').textContent = 'تسعى حراء لتحقيق أهدافها من خلال ثلاثة ركائز:';
      document.getElementById('goalSuccess').textContent = 'النجاح';
      document.getElementById('goalSuccessDescription').textContent = 'تحقيق نتائج متميزة في كل مشروع.';
      document.getElementById('goalSustainability').textContent = 'الاستدامة';
      document.getElementById('goalSustainabilityDescription').textContent = 'ضمان أن يكون تأثير الشركة الإيجابي ملموساً للأجيال القادمة.';
      document.getElementById('goalLeadership').textContent = 'القيادة';
      document.getElementById('goalLeadershipDescription').textContent = 'الابتكار ووضع اتجاهات يتبعها الآخرون.';
      document.getElementById('variousProjectsText').textContent = 'مشاريع متنوعة';
      document.getElementById('counterProjects').textContent = '٢٠٠';
      document.getElementById('governorateText').textContent = 'محافظة';
      document.getElementById('counterGovernorate').textContent = '٢٢';
      document.getElementById('cityText').textContent = 'مدينة';
      document.getElementById('counterCity').textContent = '٨٥';
      document.getElementById('assignmentText').textContent = 'جهة الاسناد';
      document.getElementById('counterAssignment').textContent = '١٢٠';
      document.getElementById('serviceTitle').textContent = 'خدماتنا';
      document.getElementById('serviceConstruction').textContent = 'بناء';
      document.getElementById('serviceDestruction').textContent = 'هدم';
      document.getElementById('serviceRestoration').textContent = 'ترميم وتطوير وتحديث';
      document.getElementById('clients-title').textContent = 'عملاؤنا';
      document.getElementById('news-title').textContent = 'الصحافة والأخبار';
      document.getElementById('Media-coverage').textContent = 'التغطية الإعلامية';
      document.getElementById('Presidential-inaugurations').textContent = 'الافتتاحيات الرئاسية';
      document.getElementById('presidentText').textContent = 'الرئيس السيسي يشهد افتتاح مشروع استزراع الأسماك ببركة غليون';
      document.getElementById('gamalMuseumText').textContent = 'الرئيس السيسي يشهد افتتاح متحف جمال عبد الناصر';
      document.getElementById('Ministerial-openings').textContent = 'الإفتتاحات الوزارية';
      document.getElementById('safagaTaxText').textContent = 'افتتاح مبنى الضرائب بسفاجا بحضور محافظ البحر الأحمر ورئيس مصلحة الضرائب';
      document.getElementById('ratebSiddiqText').textContent = 'افتتاح متحف راتب صديق بحضور الوزير صابر عرب ومحافظ الجيزة';
      document.getElementById('helmyNamnamText').textContent = 'قام الوزير حلمي النمنم وابن جمال عبد الناصر بتفقد أعمال التطوير بمتحف جمال عبد الناصر';
      document.getElementById('jaberAsfourText').textContent = 'زيارة تفقدية من الوزير جابر عصفور إلى متحف جمال عبد الناصر';
      document.getElementById('culturalCenterText').textContent = 'وضع حجر الأساس للمركز الثقافي العالمي بحضور وزير الثقافة ووزير السياحة ومحافظ أسوان';
      document.getElementById('salloumPortText').textContent = 'افتتاح ميناء السلوم البري بحضور رئيس هيئة الموانئ البرية';
      document.getElementById('sinaiDamsText').textContent = 'افتتاح البحيرات والسدود في جنوب سيناء بحضور وزير الري ومحافظ جنوب سيناء';
      document.getElementById('Honors').textContent = 'التكريمات';
      document.getElementById('honorTheaterText').textContent = 'حفل تكريم خلال مهرجان المسرح في صعيد مصر';
      document.getElementById('honorArmyText').textContent = 'حفل تكريم من هيئة مشروعات القوات المسلحة بعد الانتهاء من مشروع الثروة السمكية';
      document.getElementById('honorIRS').textContent = 'تكريم من مصلحة الضرائب';
      document.getElementById('contactTitle').textContent = 'اتصل بنا';
      document.getElementById('contactAddressTitle').textContent = 'العنوان';
      document.getElementById('contactAddress').textContent = '2058، الحي الأول، الهضبة الوسطى، المقطم، القاهرة';
      document.getElementById('contactCallTitle').textContent = 'اتصل بنا';
      document.getElementById('contactPhone').textContent = 'الهاتف 1 : +٤٧٨٥-٧٨٩ (٤٠٩) ١';
      document.getElementById('contactEmailTitle').textContent = 'البريد الإلكتروني';
      document.getElementById('contactEmail').textContent = 'support@company.com';
    
    } else {
       // Set text to LTR
    textElement.classList.remove('rtl');
    textElement.classList.add('ltr');
    sectionContact.classList.remove('rtl');
    sectionContact.classList.add('ltr');
    textElement.classList.remove('arabic-font');
        // Set English text
      document.getElementById('openHours').textContent = 'Open: sun - thu : 9 - 4';
      document.getElementById('location').textContent = 'El Mokattam, Cairo Governorate 4254005';
      document.getElementById('quickEmail').textContent = 'Quick Email';
      document.getElementById('phoneNumber').textContent = '+1 (409) 987–5874';
      document.getElementById('navHome').textContent = 'Home';
      document.getElementById('navServices').textContent = 'Services';
      document.getElementById('navClients').textContent = 'Clients';
      document.getElementById('navNews').textContent = 'Press and News';
      document.getElementById('navProjects').textContent = 'Projects';
      document.getElementById('navContact').textContent = 'Contact Us';
      document.getElementById('navCareer').textContent = 'Career'
      document.getElementById('navLanguage').textContent = 'Language';
      document.getElementById('offcanvasNavbarLabel').textContent = 'HERAA';
      document.getElementById('navHomeMobile').textContent = 'Home';
      document.getElementById('navServicesMobile').textContent = 'Services';
      document.getElementById('navNewsMobile').textContent = 'Press and News';
      document.getElementById('navProjectsMobile').textContent = 'Projects';
      document.getElementById('navClientsMobile').textContent = 'Our Clients';
      document.getElementById('navContactMobile').textContent = 'Contact Us';
      document.getElementById('navCareerMobile').textContent = 'Career'
      document.getElementById('navLanguageMobile').textContent = 'Language';
      document.getElementById('aboutCompanyName').textContent = 'HERAA';
      document.getElementById('aboutTagline').textContent = 'Construction and Supplies';
      document.getElementById('aboutDescription').textContent = 'Founded in 1992, HERAA Contracting & Supplies has steadily grown to become a leader in its field. With a clear vision and defined goals, the company stands out among others, avoiding random strides and focusing instead on a purposeful path to success. HERAA\'s core principles include success, continuity, and pioneering advancements.';
      document.getElementById('aboutVisionTitle').textContent = 'Vision';
      document.getElementById('aboutVisionDescription').textContent = 'To lead with purpose, drive innovation, and set new standards in contracting and supplies. In a fast-paced world, HERAA is the one that stands out — not rushing aimlessly, but moving forward with a clear direction and well-defined goals.';
      document.getElementById('aboutGoalsTitle').textContent = 'Our Goals';
      document.getElementById('aboutGoalsDescription').textContent = 'HERAA\'s mission is driven by three pillars:';
      document.getElementById('goalSuccess').textContent = 'Success';
      document.getElementById('goalSuccessDescription').textContent = 'Achieving remarkable results in every project.';
      document.getElementById('goalSustainability').textContent = 'Sustainability';
      document.getElementById('goalSustainabilityDescription').textContent = 'Ensuring the company’s positive impact is felt for generations.';
      document.getElementById('goalLeadership').textContent = 'Leadership';
      document.getElementById('goalLeadershipDescription').textContent = 'Innovating and setting trends that others follow.';
      document.getElementById('variousProjectsText').textContent = 'Various Projects';
      document.getElementById('counterProjects').textContent = '200';
      document.getElementById('governorateText').textContent = 'Governorate';
      document.getElementById('counterGovernorate').textContent = '22';
      document.getElementById('cityText').textContent = 'City';
      document.getElementById('counterCity').textContent = '85';
      document.getElementById('assignmentText').textContent = 'Assignment Authority';
      document.getElementById('counterAssignment').tabIndex = '120';
      document.getElementById('serviceTitle').textContent = 'Our Services';
      document.getElementById('serviceConstruction').textContent = 'Construction';
      document.getElementById('serviceDestruction').textContent = 'Destruction';
      document.getElementById('serviceRestoration').textContent = 'Restoration, development and modernization'
      document.getElementById('clients-title').textContent = 'Our Clients';
      document.getElementById('news-title').textContent = 'Press and News';
      document.getElementById('Media-coverage').textContent = 'Media coverage';
      document.getElementById('Presidential-inaugurations').textContent = 'Presidential Inaug';
      document.getElementById('presidentText').textContent = 'President Sisi witnesses the opening of the Birkat Ghalioun fish farming project';
      document.getElementById('gamalMuseumText').textContent = 'President Sisi witnesses the opening of the Gamal Abdel Nasser Museum';
      document.getElementById('Ministerial-openings').textContent = 'Ministrial Inaug';
      document.getElementById('safagaTaxText').textContent = 'Opening of the Safaga Tax Building in the presence of the Governor of the Red Sea and the Head of the Tax Authority';
      document.getElementById('ratebSiddiqText').textContent = 'Opening of the Rateb Siddiq Museum in the presence of Minister Saber Arab and the Governor of Giza';
      document.getElementById('helmyNamnamText').textContent = 'Minister Helmy Al-Namnam and Ibn Gamal Abdel Nasser inspected the development work at the Gamal Abdel Nasser Museum';
      document.getElementById('jaberAsfourText').textContent = 'An inspection visit from Minister Jaber Asfour to the Gamal Abdel Nasser Museum';
      document.getElementById('culturalCenterText').textContent = 'Laying the foundation stone for the World Cultural Center in the presence of the Minister of Culture, the Minister of Tourism, and the Governor of Aswan';
      document.getElementById('salloumPortText').textContent = 'Opening of Salloum Land Port in the presence of the Chairman of the Land Ports Authority';
      document.getElementById('sinaiDamsText').textContent = 'Opening of lakes and dams in South Sinai in the presence of the Minister of Irrigation and the Governor of South Sinai';
      document.getElementById('Honors').textContent = 'Honors';
      document.getElementById('honorTheaterText').textContent = 'An honoring ceremony during the Theater Festival in Upper Egypt';
      document.getElementById('honorArmyText').textContent = 'An honoring ceremony from the Armed Forces Projects Authority after the completion of the fish wealth project';
      document.getElementById('honorIRS').textContent = 'Honored by the IRS';
      document.getElementById('contactTitle').textContent = 'Contact Us';
    document.getElementById('contactAddressTitle').textContent = 'Address';
    document.getElementById('contactAddress').textContent = '2058, 1st District, Al-Hadaba Al-Wosta, El Mokattam, Cairo';
    document.getElementById('contactCallTitle').textContent = 'Call Us';
    document.getElementById('contactPhone').textContent = 'Phone 1 : (+098) 7654 3210';
    document.getElementById('contactEmailTitle').textContent = 'Email';
    document.getElementById('contactEmail').textContent = 'support@company.com';
    counterProjects.textContent = '200';
    }
    }

function toggleLanguage1(language){
  
  if (language === 'ar') {
    // Set text to RTL
    document.getElementById('aboutText').classList.remove('ltr');
    document.getElementById('aboutText').classList.add('rtl');
    document.getElementById('aboutText1').classList.remove('ltr');
    document.getElementById('aboutText1').classList.add('rtl');
    document.getElementById('aboutText2').classList.remove('ltr');
    document.getElementById('aboutText2').classList.add('rtl');
    document.getElementById('aboutText3').classList.remove('ltr');
    document.getElementById('aboutText3').classList.add('rtl');
    document.getElementById('aboutText4').classList.remove('ltr');
    document.getElementById('aboutText4').classList.add('rtl');
    document.getElementById('aboutText5').classList.remove('ltr');
    document.getElementById('aboutText5').classList.add('rtl');
    document.getElementById('aboutText6').classList.remove('ltr');
    document.getElementById('aboutText6').classList.add('rtl');
    document.getElementById('aboutText7').classList.remove('ltr');
    document.getElementById('aboutText7').classList.add('rtl');
    document.getElementById('aboutText8').classList.remove('ltr');
    document.getElementById('aboutText8').classList.add('rtl');
    document.getElementById('aboutText9').classList.remove('ltr');
    document.getElementById('aboutText9').classList.add('rtl');
    document.getElementById('aboutText10').classList.remove('ltr');
    document.getElementById('aboutText10').classList.add('rtl');
    document.getElementById('aboutText11').classList.remove('ltr');
    document.getElementById('aboutText11').classList.add('rtl');
    document.getElementById('aboutText12').classList.remove('ltr');
    document.getElementById('aboutText12').classList.add('rtl');
    document.getElementById('aboutText13').classList.remove('ltr');
    document.getElementById('aboutText13').classList.add('rtl');
    document.getElementById('aboutText14').classList.remove('ltr');
    document.getElementById('aboutText14').classList.add('rtl');
    document.getElementById('aboutText15').classList.remove('ltr');
    document.getElementById('aboutText15').classList.add('rtl');
    document.getElementById('aboutText16').classList.remove('ltr');
    document.getElementById('aboutText16').classList.add('rtl');
    document.getElementById('aboutText17').classList.remove('ltr');
    document.getElementById('aboutText17').classList.add('rtl');
    document.getElementById('aboutText18').classList.remove('ltr');
    document.getElementById('aboutText18').classList.add('rtl');
    document.getElementById('aboutText19').classList.remove('ltr');
    document.getElementById('aboutText19').classList.add('rtl');
    document.getElementById('aboutText20').classList.remove('ltr');
    document.getElementById('aboutText20').classList.add('rtl');
    document.getElementById('aboutText21').classList.remove('ltr');
    document.getElementById('aboutText21').classList.add('rtl');
    document.getElementById('aboutText22').classList.remove('ltr');
    document.getElementById('aboutText22').classList.add('rtl');
    document.getElementById('sectionContact').classList.remove('ltr');
    document.getElementById('sectionContact').classList.add('rtl');
    document.getElementById('aboutText').classList.add('arabic-font');
        // Set Arabic text
      document.getElementById('openHours').textContent = 'مفتوح: الأحد - الخميس: ٤ - ٩';
      document.getElementById('location').textContent = 'المقطم، محافظة القاهرة ٤٢٥٤٠٠٥';
      document.getElementById('quickEmail').textContent = 'البريد السريع';
      document.getElementById('phoneNumber').textContent = '+٤٧٨٥-٧٨٩ (٤٠٩) ١';
      document.getElementById('navHome').textContent = 'الرئيسية';
      document.getElementById('navServices').textContent = 'الخدمات';
      document.getElementById('navClients').textContent = 'عملاؤنا';
      document.getElementById('navNews').textContent = 'الصحافة والأخبار';
      document.getElementById('navProjects').textContent = 'المشاريع';
      document.getElementById('navContact').textContent = 'اتصل بنا';
      document.getElementById('navCareer').textContent = 'وظيفة';
      document.getElementById('navLanguage').textContent = 'اللغة';
      document.getElementById('offcanvasNavbarLabel').textContent = 'حراء';
      document.getElementById('navHomeMobile').textContent = 'الرئيسية';
      document.getElementById('navServicesMobile').textContent = 'الخدمات';
      document.getElementById('navNewsMobile').textContent = 'الصحافة والأخبار';
      document.getElementById('navProjectsMobile').textContent = 'المشاريع';
      document.getElementById('navClientsMobile').textContent = 'عملاؤنا';
      document.getElementById('navContactMobile').textContent = 'اتصل بنا';
      document.getElementById('navCareerMobile').textContent = 'وظيفة'
      document.getElementById('navLanguageMobile').textContent = 'اللغة';
      document.getElementById('museumTitle').textContent = 'متحف الزعيم جمال عبد الناصر';
      document.getElementById('museumDescription').textContent = 'ترميم وتطوير المنزل الشخصي للزعيم جمال عبد الناصر ليصبح متحفًا وطنيًا يعرض حياته الشخصية والسياسية من خلال وثائقيات ومعارض لمقتنياته.';
      document.getElementById('assignmentAuthority').textContent = 'الجهة المسؤولة';
      document.getElementById('assignmentAuthority-ans').textContent =' : وزارة الثقافة';
      document.getElementById('natureOfWork').textContent = 'طبيعة العمل';
      document.getElementById('natureOfWork-ans').textContent =  ' : تطوير وتجديد';
      document.getElementById('projectDuration').textContent = 'مدة المشروع';
      document.getElementById('projectDuration-ans').textContent =' : 34 شهرًا';
      document.getElementById('position').textContent = 'الموقع';
      document.getElementById('position-ans').textContent = ' : مصر الجديدة، القاهرة';
      document.getElementById('area').textContent = 'المساحة';
      document.getElementById('area-ans').textContent =' : 12,000 متر مربع';
      document.getElementById('title-bookcenter').textContent = 'الهيئة المصرية العامة للكتاب';
      document.getElementById("bookCenterDescription").textContent ="قمنا بتطوير المركز الدولي للكتاب من حيث قاعات الاستطلاع للبالغين، وقاعات الاستطلاع للأطفال، وقاعات عرض الكتب ومنافذ البيع.";
      document.getElementById("assignmentAuthority-book").textContent = "الجهة المسؤولة";
      document.getElementById("assignmentAuthority-ansbook").textContent = ": وزارة الثقافة";
      document.getElementById("natureOfWork-book").textContent = "طبيعة العمل";
      document.getElementById("natureOfWork-ansbook").textContent = ": تطوير وتجديد";
      document.getElementById("projectDuration-book").textContent = "مدة المشروع";
      document.getElementById("projectDuration-ansbook").textContent = ": 12 شهرًا";
      document.getElementById("position-book").textContent = "الموقع";
      document.getElementById("position-ansbook").textContent = ": وسط البلد، القاهرة";
      document.getElementById("area-book").textContent = "المساحة";
      document.getElementById("area-ansbook").textContent = ": 900 متر مربع";
      document.getElementById('title-MayComplex').textContent = 'مجمع 15 مايو للفنون';
      document.getElementById('MayComplexDescription').textContent = 'وتشمل مكونات المشروع ورش العمل والمعارض والمخازن وخدمات الموقع العامة وإدارته';
      document.getElementById('assignmentAuthority-MayComplex').textContent = "الجهة المسؤولة";
      document.getElementById('assignmentAuthority-ansMayComplex').textContent = ": وزارة الثقافة";
      document.getElementById('natureOfWork-MayComplex').textContent = "طبيعة العمل";
      document.getElementById('natureOfWork-ansMayComplex').textContent = ' : انشاء';
      document.getElementById('projectDuration-MayComplex').textContent = "مدة المشروع";
      document.getElementById('projectDuration-ansMayComplex').textContent = ": 12 شهرًا";
      document.getElementById('position-MayComplex').textContent = "الموقع";
      document.getElementById('position-ansMayComplex').textContent = ": مايو 15 ، القاهرة";
      document.getElementById('area-MayComplex').textContent = "المساحة";
      document.getElementById('area-ansMayComplex').textContent = ": 8000 متر مربع";
      document.getElementById('title-Fish-KafrElSheikh').textContent = 'مشروع المزارع السمكية بكفر الشيخ';
      document.getElementById('Fish-farms-Kafr-SheikhDescription').textContent = 'إنشاء أكبر مزرعة سمكية في الشرق الأوسط قادرة على توفير 70% من استهلاك مصر من الأسماك.';
      document.getElementById('assignmentAuthority-Fish').textContent = "الجهة المسؤولة";
      document.getElementById('assignmentAuthority-ansFish').textContent = ": وزارة الدفاع";
      document.getElementById('natureOfWork-Fish').textContent = "طبيعة العمل";
      document.getElementById('natureOfWork-ansFish').textContent = ' : انشاء';
      document.getElementById('projectDuration-Fish').textContent = "مدة المشروع";
      document.getElementById('projectDuration-ansFish').textContent = ": 12 شهرًا";
      document.getElementById('position-Fish').textContent = "الموقع";
      document.getElementById('position-ansFish').textContent = ": غليون كفر الشيخ";
      document.getElementById('area-Fish').textContent = "المساحة";
      document.getElementById('area-ansFish').textContent = ": 80000 متر مربع";
      document.getElementById('title-birAlabd').textContent = 'استصلاح ستة آلاف فدان بمدينة بئر العبد';
      document.getElementById('BirAlAbd-Description').textContent = 'استصلاح زراعي لستة آلاف فدان بمنطقة بئر العبد بشمال سيناء ضمن خطة مكثفة تتضمن استصلاح ربعمائة ألف فدان لتوسيع الرقعة الزراعية على مستوى الجمهورية.';
      document.getElementById('assignmentAuthority-biralabd').textContent = "الجهة المسؤولة";
      document.getElementById('assignmentAuthority-ansbiralabd').textContent = ": وزارة الزراعة";
      document.getElementById('natureOfWork-biralabd').textContent = "طبيعة العمل";
      document.getElementById('natureOfWork-ansbiralabd').textContent = ' : الاستصلاح والبناء';
      document.getElementById('projectDuration-biralabd').textContent = "مدة المشروع";
      document.getElementById('projectDuration-ansbiralabd').textContent = ": 12 شهرًا";
      document.getElementById('position-biralabd').textContent = "الموقع";
      document.getElementById('position-ansbiralabd').textContent = ": بئر العبد بشمال سيناء";
      document.getElementById('area-biralabd').textContent = "المساحة";
      document.getElementById('area-ansbiralabd').textContent = ": 6000 متر مربع";
      document.getElementById('title-AbuSimbel').textContent = 'المركز الثقافي العالمي بأبو سمبل';
      document.getElementById('AbuSimbel-Description').textContent = 'ويضم قصر ثقافة أبو سمبل مكتبة عامة تحتوي على 4000 كتاب، ومكتبة للأطفال تحتوي على 2500 كتاب، بالإضافة إلى قاعة للندوات والمحاضرات، وقاعة للأمسيات الشعرية واللقاءات الأخرى، كما يضم مسرحًا خارجيًا.';
      document.getElementById('assignmentAuthority-Abu-Simbel').textContent = "الجهة المسؤولة";
      document.getElementById('assignmentAuthority-ansAbu-Simbel').textContent = ": وزارة الثقافة";
      document.getElementById('natureOfWork-Abu-Simbel').textContent = "طبيعة العمل";
      document.getElementById('natureOfWork-ansAbu-Simbel').textContent = ' : انشاء';
      document.getElementById('projectDuration-Abu-Simbel').textContent = "مدة المشروع";
      document.getElementById('projectDuration-ansAbu-Simbel').textContent = ": 24 شهرًا";
      document.getElementById('position-Abu-Simbel').textContent = "الموقع";
      document.getElementById('position-ansAbu-Simbel').textContent = ": أبو سمبل أسوان";
      document.getElementById('area-Abu-Simbel').textContent = "المساحة";
      document.getElementById('area-ansAbu-Simbel').textContent = ": 5000 متر مربع";
      document.getElementById('title-qena').textContent = 'مسرح وقصر الثقافة قنا';
      document.getElementById('qena-Description').textContent = 'يتكون قصر ثقافة قنا من 6 طوابق منها مكاتب إدارة فرع الثقافة وقصر ثقافة الطفل ومسرح يتسع لـ 500 فرد، بالإضافة إلى قاعات الأنشطة مثل الموسيقى والفنون التشكيلية ومكتبة ونادي نسائي. ونادي الأدب، ونادي التكنولوجيا.';
      document.getElementById('assignmentAuthority-qena').textContent = "الجهة المسؤولة";
      document.getElementById('assignmentAuthority-ansqena').textContent = ": وزارة الثقافة";
      document.getElementById('natureOfWork-qena').textContent = "طبيعة العمل";
      document.getElementById('natureOfWork-ansqena').textContent = ' : التطوير والتجديد';
      document.getElementById('projectDuration-qena').textContent = "مدة المشروع";
      document.getElementById('projectDuration-ansqena').textContent = ": 18 شهرًا";
      document.getElementById('position-qena').textContent = "الموقع";
      document.getElementById('position-ansqena').textContent = ": قنا";
      document.getElementById('area-qena').textContent = "المساحة";
      document.getElementById('area-ansqena').textContent = ": 1437 متر مربع";
      document.getElementById('title-MuseumIsland').textContent = 'متحف الجزيرة والحضارة';
      document.getElementById('MuseumIsland-Description').textContent = 'تحت الانشاء';
      document.getElementById('MuseumIsland-Description2').textContent = 'المشروع عبارة عن تطوير متحف الجزيرة  بدار الاوبرا / الجزيرة لإحياء التراث الثقافى والحضارى  عبارة عن مبنى القبة السماوية والتى ستكون قاعات لعرض اللوحات الفنيه والتشكيليه و الهدايا التحفية و مبنى متصل بالمتحف الذى يتميز بواجهاته التى تطل علي مناظر طبيعية المشروع يتميز بوجود قاعات عرض بمساحات كبيرة مجهزهبأنظمة حماية ضد السرقة ونظام مراقبة و نظام إنذار ضد الحريق و نظام اطفاء الي'
      document.getElementById('assignmentAuthority-MuseumIsland').textContent = "الجهة المسؤولة";
      document.getElementById('assignmentAuthority-ansMuseumIsland').textContent = ": وزارة الثقافة";
      document.getElementById('natureOfWork-MuseumIsland').textContent = "طبيعة العمل";
      document.getElementById('natureOfWork-ansMuseumIsland').textContent = ' : التطوير والتجديد';
      document.getElementById('projectDuration-MuseumIsland').textContent = "مدة المشروع";
      document.getElementById('projectDuration-ansMuseumIsland').textContent = ": 36 شهرًا";
      document.getElementById('position-MuseumIsland').textContent = "الموقع";
      document.getElementById('position-ansMuseumIsland').textContent = ": الزمالك القاهرة";
      document.getElementById('area-MuseumIsland').textContent = "المساحة";
      document.getElementById('area-ansMuseumIsland').textContent = ": 3000 متر مربع";
      document.getElementById('title-rateb').textContent = 'متحف راتب صديق';
      document.getElementById('ratib-Description').textContent = 'تطوير وتجديد منزل راتب صديق ليكون متحفاً وإنشاء مركز ثقافي واجتماعي حوله';
      document.getElementById('assignmentAuthority-ratib').textContent = "الجهة المسؤولة";
      document.getElementById('assignmentAuthority-ansratib').textContent = ": وزارة الثقافة";
      document.getElementById('natureOfWork-ratib').textContent = "طبيعة العمل";
      document.getElementById('natureOfWork-ansratib').textContent = ' : انشاء';
      document.getElementById('projectDuration-ratib').textContent = "مدة المشروع";
      document.getElementById('projectDuration-ansratib').textContent = ": 12 شهرًا";
      document.getElementById('position-ratib').textContent = "الموقع";
      document.getElementById('position-ansratib').textContent = ": المنيب الجيزة";
      document.getElementById('area-ratib').textContent = "المساحة";
      document.getElementById('area-ansratib').textContent = ": 5000 متر مربع";
      document.getElementById('title-PortSaiid').textContent = 'مجمع ضرائب بورسعيد';
      document.getElementById('PortSaiid-Description').textContent = 'مكونات المشروع هي البنية التحتية، 9 أدوار متكررة، خدمة عملاء، مكاتب إدارية، مركز تدريب، طابقين للجمارك والضرائب العقارية، أرشيف واستقبال، والمبنى المجاور له يحتوي على غرف الكهرباء والمحولات والمولدات.';
      document.getElementById('assignmentAuthority-PortSaiid').textContent = "الجهة المسؤولة";
      document.getElementById('assignmentAuthority-ansPortSaiid').textContent = ": وزارة المالية";
      document.getElementById('natureOfWork-PortSaiid').textContent = "طبيعة العمل";
      document.getElementById('natureOfWork-ansPortSaiid').textContent = ' : انشاء';
      document.getElementById('projectDuration-PortSaiid').textContent = "مدة المشروع";
      document.getElementById('projectDuration-ansPortSaiid').textContent = ": 36 شهرًا";
      document.getElementById('position-PortSaiid').textContent = "الموقع";
      document.getElementById('position-ansPortSaiid').textContent = ": بورسعيد";
      document.getElementById('area-PortSaiid').textContent = "المساحة";
      document.getElementById('area-ansPortSaiid').textContent = ": 2200 متر مربع";
      document.getElementById('title-Officer').textContent = 'المبنى الجديد لنادي ضباط الشرطة';
      document.getElementById('Officer-Description').textContent = 'يتكون نادي الشرطة من المباني الإدارية والقسم المدني وقاعات الاجتماعات وغرف الانتظار ومركز المعلومات وقاعة كبار الشخصيات والموقع العام';
      document.getElementById('assignmentAuthority-Officer').textContent = "الجهة المسؤولة";
      document.getElementById('assignmentAuthority-ansOfficer').textContent = ": وزارة الداخلية";
      document.getElementById('natureOfWork-Officer').textContent = "طبيعة العمل";
      document.getElementById('natureOfWork-ansOfficer').textContent = ' : بناء';
      document.getElementById('projectDuration-Officer').textContent = "مدة المشروع";
      document.getElementById('projectDuration-ansOfficer').textContent = ": 8 شهرًا";
      document.getElementById('position-Officer').textContent = "الموقع";
      document.getElementById('position-ansOfficer').textContent = ": الزمالك القاهرة";
      document.getElementById('title-Tanta').textContent = 'المسرح القومي بطنطا';
      document.getElementById('Tanta-Description').textContent = 'تطوير وتجديد مسرح مدينة طنطا ليكون مسرحًا ومركزًا اجتماعيًا للمدينة بأكملها يقدم العديد من الخدمات وورش العمل المتنوعة وأشكال الفنون المختلفة التي تعزز المجتمع ثقافيًا وتحسن مستوى المعيشة.';
      document.getElementById('assignmentAuthority-Tanta').textContent = "الجهة المسؤولة";
      document.getElementById('assignmentAuthority-ansTanta').textContent =  ": وزارة الثقافة";
      document.getElementById('natureOfWork-Tanta').textContent = "طبيعة العمل";
      document.getElementById('natureOfWork-ansTanta').textContent = ' : التطوير والتجديد';
      document.getElementById('projectDuration-Tanta').textContent = "مدة المشروع";
      document.getElementById('projectDuration-ansTanta').textContent = ": 24 شهرًا";
      document.getElementById('position-Tanta').textContent = "الموقع";
      document.getElementById('position-ansTanta').textContent = ": طنطا الغربية";
      document.getElementById('area-Tanta').textContent = "المساحة";
      document.getElementById('area-ansTanta').textContent = ": 1500 متر مربع";
      document.getElementById('title-Watir').textContent = 'السدود والبحيرات في وادي وتير';
      document.getElementById('Watir-Description').textContent = 'مكونات المشروع: بحيرة مائية، وسد الصوانة، وسد شفالله، وسد الشبيحة';
      document.getElementById('assignmentAuthority-Watir').textContent = "الجهة المسؤولة";
      document.getElementById('assignmentAuthority-ansWatir').textContent = ": وزارة الري";
      document.getElementById('natureOfWork-Watir').textContent = "طبيعة العمل";
      document.getElementById('natureOfWork-ansWatir').textContent = ' : بناء';
      document.getElementById('projectDuration-Watir').textContent = "مدة المشروع";
      document.getElementById('projectDuration-ansWatir').textContent = ": 18 شهرًا";
      document.getElementById('position-Watir').textContent = "الموقع";
      document.getElementById('position-ansWatir').textContent = ": واتير، جنوب سيناء";
      document.getElementById('title-Suez').textContent = 'مجمع ضرائب السويس';
      document.getElementById('assignmentAuthority-Suez').textContent = "الجهة المسؤولة";
      document.getElementById('assignmentAuthority-ansSuez').textContent = ": وزارة المالية";
      document.getElementById('natureOfWork-Suez').textContent = "طبيعة العمل";
      document.getElementById('natureOfWork-ansSuez').textContent = ' : بناء';
      document.getElementById('projectDuration-Suez').textContent = "مدة المشروع";
      document.getElementById('projectDuration-ansSuez').textContent = ": 18 شهرًا";
      document.getElementById('position-Suez').textContent = "الموقع";
      document.getElementById('position-ansSuez').textContent = ":  السويس";
      document.getElementById('area-Suez').textContent = "المساحة";
      document.getElementById('area-ansSuez').textContent = ": 1500 متر مربع";
      document.getElementById('title-Beni-Suef').textContent = 'مديرية أمن بني سويف';
      document.getElementById('Beni-Suef-Description').textContent = 'يتكون المشروع من 7 أدوار، سرداب، مركز معلومات، مكاتب خدمية، مكاتب إدارية، قاعات اجتماعات، أبراج أمنية، والموقع العام.';
      document.getElementById('assignmentAuthority-Beni-Suef').textContent = "الجهة المسؤولة";
      document.getElementById('assignmentAuthority-ansBeni-Suef').textContent = ": وزارة الداخلية";
      document.getElementById('natureOfWork-Beni-Suef').textContent = "طبيعة العمل";
      document.getElementById('natureOfWork-ansBeni-Suef').textContent = ' : بناء';
      document.getElementById('projectDuration-Beni-Suef').textContent = "مدة المشروع";
      document.getElementById('projectDuration-ansBeni-Suef').textContent = ": 18 شهرًا";
      document.getElementById('position-Beni-Suef').textContent = "الموقع";
      document.getElementById('position-ansBeni-Suef').textContent = ": بني سويف";
      document.getElementById('area-Beni-Suef').textContent = "المساحة";
      document.getElementById('area-ansBeni-Suef').textContent = ": 15000 متر مربع";
      document.getElementById('title-Gamaleya').textContent = 'مجمع شرطة الجمالية';
      document.getElementById('Gamaleya-Description').textContent = 'ويتكون من سرداب مكون من 6 طوابق، وساحة المدخل، وغرف احتجاز الرجال، وغرف احتجاز النساء، ومكاتب إدارية، ومستودعات، ومخزن أسلحة، وسجل مدني، ومختبرات حاسوب، وقاعات محاضرات.';
      document.getElementById('assignmentAuthority-Gamaleya').textContent = "الجهة المسؤولة";
      document.getElementById('assignmentAuthority-ansGamaleya').textContent = ": وزارة الداخلية";
      document.getElementById('natureOfWork-Gamaleya').textContent = "طبيعة العمل";
      document.getElementById('natureOfWork-ansGamaleya').textContent = ' : بناء';
      document.getElementById('projectDuration-Gamaleya').textContent = "مدة المشروع";
      document.getElementById('projectDuration-ansGamaleya').textContent = ": 18 شهرًا";
      document.getElementById('position-Gamaleya').textContent = "الموقع";
      document.getElementById('position-ansGamaleya').textContent = ":  الجمالية، القاهرة";
      document.getElementById('area-Gamaleya').textContent = "المساحة";
      document.getElementById('area-ansGamaleya').textContent = ": 5000 متر مربع";
      document.getElementById('title-Ismailia').textContent = 'قصر ثقافة الاسماعيلية';
      document.getElementById('Ismailia-Description').textContent = 'تشتمل مكونات المشروع على مسرح وقاعة معارض وقاعة مؤتمرات ومكاتب إدارية ومسرح صيفي ومساحات خدمية.';
      document.getElementById('assignmentAuthority-Ismailia').textContent = "الجهة المسؤولة";
      document.getElementById('assignmentAuthority-ansIsmailia').textContent = ": وزارة الثقافة";
      document.getElementById('natureOfWork-Ismailia').textContent = "طبيعة العمل";
      document.getElementById('natureOfWork-ansIsmailia').textContent = ' : التطوير والتجديد';
      document.getElementById('projectDuration-Ismailia').textContent = "مدة المشروع";
      document.getElementById('projectDuration-ansIsmailia').textContent = ": 18 شهرًا";
      document.getElementById('position-Ismailia').textContent = "الموقع";
      document.getElementById('position-ansIsmailia').textContent = ": الاسماعيلية";
      document.getElementById('area-Ismailia').textContent = "المساحة";
      document.getElementById('area-ansIsmailia').textContent = ": 5000 متر مربع";
      document.getElementById('title-Alsayida').textContent = 'ضرائب السيدة زينب' ;
      document.getElementById('Alsayida-Description').textContent = 'مكونات المشروع: 10 طوابق وثلاثة طوابق لخدمة العملاء، مكاتب إدارية، أرشيف، مخازن، مساحات خدمية، غرف كهرباء، غرف كاميرات، UPS.';
      document.getElementById('assignmentAuthority-Alsayida').textContent = "الجهة المسؤولة";
      document.getElementById('assignmentAuthority-ansAlsayida').textContent = ': وزارة المالية';
      document.getElementById('natureOfWork-Alsayida').textContent = "طبيعة العمل";
      document.getElementById('natureOfWork-ansAlsayida').textContent = ': التطوير والتجديد';
      document.getElementById('projectDuration-Alsayida').textContent = "مدة المشروع";
      document.getElementById('projectDuration-ansAlsayida').textContent = ': 15 شهرا';
      document.getElementById('position-Alsayida').textContent = "الموقع";
      document.getElementById('position-ansAlsayida').textContent = ': السيدة زينب، القاهرة';
      document.getElementById('title-Mut').textContent = 'قصر ثقافة موط';
      document.getElementById('Mut-Description').textContent = 'وتشمل مكونات المشروع سينما ومسرح ومستودعات وخدمات ومكاتب إدارية وسكن مؤقت.';
      document.getElementById('assignmentAuthority-Mut').textContent = "الجهة المسؤولة";
      document.getElementById('assignmentAuthority-ansMut').textContent =  ": وزارة الثقافة";
      document.getElementById('natureOfWork-Mut').textContent = "طبيعة العمل";
      document.getElementById('natureOfWork-ansMut').textContent = ' : التطوير والتجديد';
      document.getElementById('projectDuration-Mut').textContent = "مدة المشروع";
      document.getElementById('projectDuration-ansMut').textContent = ": 18 شهرًا";
      document.getElementById('position-Mut').textContent = "الموقع";
      document.getElementById('position-ansMut').textContent = ": الواحات الداخلة بالوادي الجديد";
      document.getElementById('area-Mut').textContent = "المساحة";
      document.getElementById('area-ansMut').textContent = ": 2260 متر مربع";
      document.getElementById('title-Heliopolis').textContent = 'محطة المعالجة الرئيسية بمدينة هليوبوليس الجديدة';
      document.getElementById('Heliopolis-Description').textContent = 'مكونات المشروع: الورش والمباني، الأعمال الكهروميكانيكية، المباني الإدارية، المستودعات، محطة الرفع، محطة معالجة الصرف الصحي، شبكة الطرق، الشبكات، الموقع العام.';
      document.getElementById('assignmentAuthority-Heliopolis').textContent = "الجهة المسؤولة";
      document.getElementById('assignmentAuthority-ansHeliopolis').textContent =  ': شركة مصر الجديدة';
      document.getElementById('natureOfWork-Heliopolis').textContent = "طبيعة العمل";
      document.getElementById('natureOfWork-ansHeliopolis').textContent = ': بنية تحتية';
      document.getElementById('position-Heliopolis').textContent = "الموقع";
      document.getElementById('position-ansHeliopolis').textContent = ': هليوبوليس الجديدة طريق السويس';
      document.getElementById('title-El-Natroun').textContent = 'قصر ثقافة وادى النطرون';
      document.getElementById('El-Natroun-Description').textContent = 'وتشمل مكونات المشروع مسرحا، وقاعات متعددة الاستخدام، ومكاتب إدارية، ومكتبة عامة، ومكتبة، وقاعات عرض، ومختبرات حاسوب، وقاعات للنساء والأطفال، وقاعة لكبار الشخصيات.';
      document.getElementById('assignmentAuthority-El-Natroun').textContent = "الجهة المسؤولة";
      document.getElementById('assignmentAuthority-ansEl-Natroun').textContent =  ": وزارة الثقافة";
      document.getElementById('natureOfWork-El-Natroun').textContent = "طبيعة العمل";
      document.getElementById('natureOfWork-ansEl-Natroun').textContent = ': بناء';
      document.getElementById('projectDuration-El-Natroun').textContent = "مدة المشروع";
      document.getElementById('projectDuration-ansEl-Natroun').textContent = ": 18 شهرًا";
      document.getElementById('position-El-Natroun').textContent = "الموقع";
      document.getElementById('position-ansEl-Natroun').textContent = ': وادي النطرون';
      document.getElementById('area-El-Natroun').textContent = "المساحة";
      document.getElementById('area-ansEl-Natroun').textContent = ': 3755 متر مربع';
      document.getElementById('title-Al-Matamir').textContent = 'قصر ثقافة أبو المطامير';
      document.getElementById('Al-Matamir-Description').textContent = 'مكونات المشروع: مكاتب إدارية، معارض، مسرح احتفالات، غرف الممثلين، قاعة كبار الشخصيات، قاعة متعددة الاستخدامات، وخدمة فندقية للفرق.';
      document.getElementById('assignmentAuthority-Al-Matamir').textContent = "الجهة المسؤولة";
      document.getElementById('assignmentAuthority-ansAl-Matamir').textContent =  ": وزارة الثقافة";
      document.getElementById('natureOfWork-Al-Matamir').textContent = "طبيعة العمل";
      document.getElementById('natureOfWork-ansAl-Matamir').textContent = ': بناء';
      document.getElementById('projectDuration-Al-Matamir').textContent = "مدة المشروع";
      document.getElementById('projectDuration-ansAl-Matamir').textContent = ": 24 شهرًا";
      document.getElementById('position-Al-Matamir').textContent = "الموقع";
      document.getElementById('position-ansAl-Matamir').textContent = ': البحيرة';
      document.getElementById('area-Al-Matamir').textContent = "المساحة";
      document.getElementById('area-ansAl-Matamir').textContent = ': 1200 متر مربع';
      document.getElementById('title-Al-Azhar').textContent = 'تطوير مشيخة الأزهر';
      document.getElementById('assignmentAuthority-Al-Azhar').textContent = "الجهة المسؤولة";
      document.getElementById('assignmentAuthority-ansAl-Azhar').textContent = ': وزارة الأوقاف';
      document.getElementById('natureOfWork-Al-Azhar').textContent = "طبيعة العمل";
      document.getElementById('natureOfWork-ansAl-Azhar').textContent = ': التطوير والتجديد';
      document.getElementById('projectDuration-Al-Azhar').textContent = "مدة المشروع";
      document.getElementById('projectDuration-ansAl-Azhar').textContent = ': 6 أشهر';
      document.getElementById('position-Al-Azhar').textContent = "الموقع";
      document.getElementById('position-ansAl-Azhar').textContent = ': الأزهر، القاهرة';
      document.getElementById('area-Al-Azhar').textContent = "المساحة";
      document.getElementById('area-ansAl-Azhar').textContent = ': 2000 متر مربع';
      document.getElementById('contactTitle').textContent = 'اتصل بنا';
      document.getElementById('contactAddressTitle').textContent = 'العنوان';
      document.getElementById('contactAddress').textContent = '2058، الحي الأول، الهضبة الوسطى، المقطم، القاهرة';
      document.getElementById('contactCallTitle').textContent = 'اتصل بنا';
      document.getElementById('contactPhone').textContent = 'الهاتف 1 : +٤٧٨٥-٧٨٩ (٤٠٩) ١';
      document.getElementById('contactEmailTitle').textContent = 'البريد الإلكتروني';
      document.getElementById('contactEmail').textContent = 'support@company.com';
  }
  else{
    document.getElementById('aboutText').classList.remove('rtl');
    document.getElementById('aboutText').classList.add('ltr');
    document.getElementById('aboutText1').classList.remove('rtl');
    document.getElementById('aboutText1').classList.add('ltr');
    document.getElementById('aboutText2').classList.remove('rtl');
    document.getElementById('aboutText2').classList.add('ltr');
    document.getElementById('aboutText3').classList.remove('rtl');
    document.getElementById('aboutText3').classList.add('ltr');
    document.getElementById('aboutText4').classList.remove('rtl');
    document.getElementById('aboutText4').classList.add('ltr');
    document.getElementById('aboutText5').classList.remove('rtl');
    document.getElementById('aboutText5').classList.add('ltr');
    document.getElementById('aboutText6').classList.remove('rtl');
    document.getElementById('aboutText6').classList.add('ltr');
    document.getElementById('aboutText7').classList.remove('rtl');
    document.getElementById('aboutText7').classList.add('ltr');
    document.getElementById('aboutText8').classList.remove('rtl');
    document.getElementById('aboutText8').classList.add('ltr');
    document.getElementById('aboutText9').classList.remove('rtl');
    document.getElementById('aboutText9').classList.add('ltr');
    document.getElementById('aboutText10').classList.remove('rtl');
    document.getElementById('aboutText10').classList.add('ltr');
    document.getElementById('aboutText11').classList.remove('rtl');
    document.getElementById('aboutText11').classList.add('ltr');
    document.getElementById('aboutText12').classList.remove('rtl');
    document.getElementById('aboutText12').classList.add('ltr');
    document.getElementById('aboutText13').classList.remove('rtl');
    document.getElementById('aboutText13').classList.add('ltr');
    document.getElementById('aboutText14').classList.remove('rtl');
    document.getElementById('aboutText14').classList.add('ltr');
    document.getElementById('aboutText15').classList.remove('rtl');
    document.getElementById('aboutText15').classList.add('ltr');
    document.getElementById('aboutText16').classList.remove('rtl');
    document.getElementById('aboutText16').classList.add('ltr');
    document.getElementById('aboutText17').classList.remove('rtl');
    document.getElementById('aboutText17').classList.add('ltr');
    document.getElementById('aboutText18').classList.remove('rtl');
    document.getElementById('aboutText18').classList.add('ltr');
    document.getElementById('aboutText19').classList.remove('rtl');
    document.getElementById('aboutText19').classList.add('ltr');
    document.getElementById('aboutText20').classList.remove('rtl');
    document.getElementById('aboutText20').classList.add('ltr');
    document.getElementById('aboutText21').classList.remove('rtl');
    document.getElementById('aboutText21').classList.add('ltr');
    document.getElementById('aboutText22').classList.remove('rtl');
    document.getElementById('aboutText22').classList.add('ltr');
    document.getElementById('sectionContact').classList.remove('rtl');
    document.getElementById('sectionContact').classList.add('ltr');
    document.getElementById('aboutText').classList.remove('arabic-font');
        // Set English text
      document.getElementById('openHours').textContent = 'Open: sun - thu : 9 - 4';
      document.getElementById('location').textContent = 'El Mokattam, Cairo Governorate 4254005';
      document.getElementById('quickEmail').textContent = 'Quick Email';
      document.getElementById('phoneNumber').textContent = '+1 (409) 987–5874';
      document.getElementById('navHome').textContent = 'Home';
      document.getElementById('navServices').textContent = 'Services';
      document.getElementById('navClients').textContent = 'Clients';
      document.getElementById('navNews').textContent = 'Press and News';
      document.getElementById('navProjects').textContent = 'Projects';
      document.getElementById('navContact').textContent = 'Contact Us';
      document.getElementById('navCareer').textContent = 'Career'
      document.getElementById('navLanguage').textContent = 'Language';
      document.getElementById('offcanvasNavbarLabel').textContent = 'HERAA';
      document.getElementById('navHomeMobile').textContent = 'Home';
      document.getElementById('navServicesMobile').textContent = 'Services';
      document.getElementById('navNewsMobile').textContent = 'Press and News';
      document.getElementById('navProjectsMobile').textContent = 'Projects';
      document.getElementById('navClientsMobile').textContent = 'Our Clients';
      document.getElementById('navContactMobile').textContent = 'Contact Us';
      document.getElementById('navCareerMobile').textContent = 'Career'
      document.getElementById('navLanguageMobile').textContent = 'Language';
      document.getElementById('museumTitle').textContent = 'Museum of Leader Gamal Abdel Nasser';
      document.getElementById('museumDescription').textContent = 'Restoration and development of the personal home of leader Gamal Abdel Nasser to be a national museum that displays his personal and political life through documentaries and exhibitions of his possessions.';
      document.getElementById('assignmentAuthority').textContent = 'Assignment Authority ';
      document.getElementById('assignmentAuthority-ans').textContent = ': Ministry of Culture';
      document.getElementById('natureOfWork').textContent = 'Nature of work ';
      document.getElementById('natureOfWork-ans').textContent =  ': development and renewal';
      document.getElementById('projectDuration').textContent = 'Project duration ';
      document.getElementById('projectDuration-ans').textContent = ': 34 months';
      document.getElementById('position').textContent = 'Position';
      document.getElementById('position-ans').textContent = ': Heliopolis, Cairo';
      document.getElementById('area').textContent = 'Area ';
      document.getElementById('area-ans').textContent = ': 12,000 square meters';
      document.getElementById('title-bookcenter').textContent = 'International Book Centre';
      document.getElementById("bookCenterDescription").textContent ='We have developed the International Book Center in terms of poll halls for adults, poll halls for children, book display halls, and sales outlets.';
      document.getElementById("assignmentAuthority-book").textContent = 'Assignment Authority ';
      document.getElementById("assignmentAuthority-ansbook").textContent = ': Ministry of Culture';
      document.getElementById("natureOfWork-book").textContent = 'Nature of work ';
      document.getElementById("natureOfWork-ansbook").textContent = ': Development and renewal';
      document.getElementById("projectDuration-book").textContent = 'Project duration ';
      document.getElementById("projectDuration-ansbook").textContent = ': 12 months';
      document.getElementById("position-book").textContent = 'Position ';
      document.getElementById("position-ansbook").textContent = ': Wast albalad, Cairo';
      document.getElementById("area-book").textContent = 'Area ';
      document.getElementById("area-ansbook").textContent = ': 900 square meters';
      document.getElementById('title-MayComplex').textContent = 'May 15 Arts Complex';
      document.getElementById('MayComplexDescription').textContent = 'The project components include workshops, exhibitions, stores, general site services and management';
      document.getElementById('assignmentAuthority-MayComplex').textContent = 'Assignment Authority ';
      document.getElementById('assignmentAuthority-ansMayComplex').textContent = ': Ministry of Culture';
      document.getElementById('natureOfWork-MayComplex').textContent = 'Nature of work';
      document.getElementById('natureOfWork-ansMayComplex').textContent = ': Construction';
      document.getElementById('projectDuration-MayComplex').textContent = 'Project duration ';
      document.getElementById('projectDuration-ansMayComplex').textContent = ': Under implementation';
      document.getElementById('position-MayComplex').textContent = 'Position ';
      document.getElementById('position-ansMayComplex').textContent = ': May 15 , Cairo';
      document.getElementById('area-MayComplex').textContent = 'Area';
      document.getElementById('area-ansMayComplex').textContent = ': 8000 square meters';
      document.getElementById('title-Fish-KafrElSheikh').textContent = 'Fish farms project in Kafr El-Sheikh';
      document.getElementById('Fish-farms-Kafr-SheikhDescription').textContent = 'Establishing the largest fish farm in the Middle East with the capacity to provide 70% of Egypt’s fish consumption.';
      document.getElementById('assignmentAuthority-Fish').textContent = 'Assignment Authority';
      document.getElementById('assignmentAuthority-ansFish').textContent =': Ministry of Defense';
      document.getElementById('natureOfWork-Fish').textContent = 'Nature of work';
      document.getElementById('natureOfWork-ansFish').textContent = ': Construction';
      document.getElementById('projectDuration-Fish').textContent = 'Project duration';
      document.getElementById('projectDuration-ansFish').textContent =': 12 months';
      document.getElementById('position-Fish').textContent = 'Position';
      document.getElementById('position-ansFish').textContent = ': Pipeline Kafr El-Sheikh';
      document.getElementById('area-Fish').textContent = 'Area';
      document.getElementById('area-ansFish').textContent = ': 80000 square meters';
      document.getElementById('title-birAlabd').textContent = 'Reclamation of six thousand acres in the city of Bir al-Abd';
      document.getElementById('BirAlAbd-Description').textContent = 'Agricultural reclamation of six thousand acres in Bir al-Abd in North Sinai as part of an intensive plan that includes the reclamation of a quarter hundred thousand acres to expand the agricultural area nationwide.';
      document.getElementById('assignmentAuthority-biralabd').textContent = 'Assignment Authority';
      document.getElementById('assignmentAuthority-ansbiralabd').textContent = ': Ministry of Agriculture';
      document.getElementById('natureOfWork-biralabd').textContent ='Nature of work';
      document.getElementById('natureOfWork-ansbiralabd').textContent = ': Reclamation and construction';
      document.getElementById('projectDuration-biralabd').textContent = 'Project duration';
      document.getElementById('projectDuration-ansbiralabd').textContent = ': 12 months';
      document.getElementById('position-biralabd').textContent = 'Position';
      document.getElementById('position-ansbiralabd').textContent = ': Bir al-Abd, North Sinai';
      document.getElementById('area-biralabd').textContent = 'Area ';
      document.getElementById('area-ansbiralabd').textContent = ': 6000 square meters';
      document.getElementById('title-AbuSimbel').textContent = 'The World Cultural Center in Abu Simbel';
      document.getElementById('AbuSimbel-Description').textContent = 'Abu Simbel Culture Palace includes a public library stocked with 4,000 books, a children’s library stocked with 2,500 books, in addition to a hall for seminars and lectures, a hall for poetry evenings and other meetings, and also an outdoor theatre.';
      document.getElementById('assignmentAuthority-Abu-Simbel').textContent = 'Assignment Authority ';
      document.getElementById('assignmentAuthority-ansAbu-Simbel').textContent = ': Ministry of Culture';
      document.getElementById('natureOfWork-Abu-Simbel').textContent ='Nature of work ';
      document.getElementById('natureOfWork-ansAbu-Simbel').textContent = ': Construction';
      document.getElementById('projectDuration-Abu-Simbel').textContent = 'Project duration ';
      document.getElementById('projectDuration-ansAbu-Simbel').textContent = ': 24 months';
      document.getElementById('position-Abu-Simbel').textContent = 'Position ';
      document.getElementById('position-ansAbu-Simbel').textContent = ': Abu Simbel Aswan';
      document.getElementById('area-Abu-Simbel').textContent ='Area ';
      document.getElementById('area-ansAbu-Simbel').textContent = ': 5000 square meters';
      document.getElementById('title-qena').textContent = 'Theater and Palace of Culture Qena';
      document.getElementById('qena-Description').textContent = 'The Qena Culture Palace consists of 6 floors, including the administration offices of the Culture Branch, the Children’s Culture Palace, and a theater that can accommodate 500 people, in addition to activity halls such as music and plastic arts, a library, a women’s club, a literature club, and a technology club.';
      document.getElementById('assignmentAuthority-qena').textContent ='Assignment Authority ';
      document.getElementById('assignmentAuthority-ansqena').textContent = ': Ministry of Culture';
      document.getElementById('natureOfWork-qena').textContent = 'Nature of work ';
      document.getElementById('natureOfWork-ansqena').textContent = ': Development and renewal';
      document.getElementById('projectDuration-qena').textContent = 'Project duration ';
      document.getElementById('projectDuration-ansqena').textContent = ': 18 months';
      document.getElementById('position-qena').textContent = 'Position ';
      document.getElementById('position-ansqena').textContent = ': Qena';
      document.getElementById('area-qena').textContent = 'Area ';
      document.getElementById('area-ansqena').textContent = ': 1437 square meters';
      document.getElementById('title-MuseumIsland').textContent = 'Museum of Island and Civilization';
      document.getElementById('MuseumIsland-Description').textContent = 'under construction';
      document.getElementById('MuseumIsland-Description2').textContent = 'The project is the development of the Gezira Museum in the Opera House / Gezira to revive The cultural and civilizational heritage is the planetarium building, which will have halls To display artistic and plastic paintings and souvenirs, and a building connected to the museum, which is distinguished by its facades that overlook natural scenery. The project is characterized by the presence of exhibition halls with large, equipped spaces. It has anti-theft protection systems, a surveillance system, a fire alarm system, and an automatic extinguishing system'
      document.getElementById('assignmentAuthority-MuseumIsland').textContent = 'Assignment Authority ';
      document.getElementById('assignmentAuthority-ansMuseumIsland').textContent = ': Ministry of Culture';
      document.getElementById('natureOfWork-MuseumIsland').textContent = 'Nature of work ';
      document.getElementById('natureOfWork-ansMuseumIsland').textContent = ': Development and renewal';
      document.getElementById('projectDuration-MuseumIsland').textContent = 'Project duration ';
      document.getElementById('projectDuration-ansMuseumIsland').textContent = ': 36 months';
      document.getElementById('position-MuseumIsland').textContent = 'Position ';
      document.getElementById('position-ansMuseumIsland').textContent = ': Zamalek Cairo';
      document.getElementById('area-MuseumIsland').textContent = 'Area ';
      document.getElementById('area-ansMuseumIsland').textContent = ': 3000 square meters';
      document.getElementById('title-rateb').textContent = 'Museum of Rateb Sediq';
      document.getElementById('ratib-Description').textContent = 'Developing and renovating Ratib Sediq’s house to be a museum and creating a cultural and social center around it.';
      document.getElementById('assignmentAuthority-ratib').textContent = 'Assignment Authority ';
      document.getElementById('assignmentAuthority-ansratib').textContent = ': Ministry of Culture';
      document.getElementById('natureOfWork-ratib').textContent = 'Nature of work ';
      document.getElementById('natureOfWork-ansratib').textContent = ': Construction';
      document.getElementById('projectDuration-ratib').textContent = 'Project duration ';
      document.getElementById('projectDuration-ansratib').textContent = ': 12 months';
      document.getElementById('position-ratib').textContent = 'Position ';
      document.getElementById('position-ansratib').textContent = ': Al-Munib Giza';
      document.getElementById('area-ratib').textContent = 'Area ';
      document.getElementById('area-ansratib').textContent = ': 5000 square meters';
      document.getElementById('title-PortSaiid').textContent = 'Port Saiid Taxes Complex';
      document.getElementById('PortSaiid-Description').textContent = '';
      document.getElementById('assignmentAuthority-PortSaiid').textContent = 'Assignment Authority ';
      document.getElementById('assignmentAuthority-ansPortSaiid').textContent = ': Ministry of Finance';
      document.getElementById('natureOfWork-PortSaiid').textContent = 'Nature of work ';
      document.getElementById('natureOfWork-ansPortSaiid').textContent = ': Construction';
      document.getElementById('projectDuration-PortSaiid').textContent = 'Project duration ';
      document.getElementById('projectDuration-ansPortSaiid').textContent = ': 36 months';
      document.getElementById('position-PortSaiid').textContent = 'Position ';
      document.getElementById('position-ansPortSaiid').textContent = ': Port Saiid';
      document.getElementById('area-PortSaiid').textContent = 'Area ';
      document.getElementById('area-ansPortSaiid').textContent = ': 2200 square meters';
      document.getElementById('title-Officer').textContent = "Police Officers' Club New Building";
      document.getElementById('Officer-Description').textContent = 'The Police Club consists of administrative buildings, the civil department, meeting rooms, waiting rooms, information center, VIP hall, and the general site.';
      document.getElementById('assignmentAuthority-Officer').textContent = 'Assignment Authority ';
      document.getElementById('assignmentAuthority-ansOfficer').textContent = ': Ministry of Interior';
      document.getElementById('natureOfWork-Officer').textContent = 'Nature of work ';
      document.getElementById('natureOfWork-ansOfficer').textContent = ': Construction';
      document.getElementById('projectDuration-Officer').textContent = 'Project duration ';
      document.getElementById('projectDuration-ansOfficer').textContent = ': 8 months';
      document.getElementById('position-Officer').textContent = 'Position ';
      document.getElementById('position-ansOfficer').textContent = ': Zamalek Cairo';
      document.getElementById('title-Tanta').textContent = 'National Theatre of Tanta';
      document.getElementById('Tanta-Description').textContent = 'Developing and renovating the Tanta City Theater to be a theater and social center for the entire city that provides many services, various workshops, and different forms of art that enhance the community culturally and improve the standard of living.';
      document.getElementById('assignmentAuthority-Tanta').textContent = 'Assignment Authority ';
      document.getElementById('assignmentAuthority-ansTanta').textContent =  ': Ministry of Culture';
      document.getElementById('natureOfWork-Tanta').textContent = 'Nature of work ';
      document.getElementById('natureOfWork-ansTanta').textContent = ': Developing and renovating';
      document.getElementById('projectDuration-Tanta').textContent = 'Project duration ';
      document.getElementById('projectDuration-ansTanta').textContent = ': 24 months';
      document.getElementById('position-Tanta').textContent = 'Position ';
      document.getElementById('position-ansTanta').textContent = ': Tanta Algharbia';
      document.getElementById('area-Tanta').textContent = 'Area ';
      document.getElementById('area-ansTanta').textContent = ': 1500 square meters';
      document.getElementById('title-Watir').textContent = 'Dams and lakes in Wadi Watir';
      document.getElementById('Watir-Description').textContent = 'Project components: a water lake, Al-Sawwanah Dam, Shafallah Dam, and Shabiha Dam.';
      document.getElementById('assignmentAuthority-Watir').textContent = 'Assignment Authority ';
      document.getElementById('assignmentAuthority-ansWatir').textContent = ': Ministry of Irrigation';
      document.getElementById('natureOfWork-Watir').textContent = 'Nature of work ';
      document.getElementById('natureOfWork-ansWatir').textContent = ': Construction';
      document.getElementById('projectDuration-Watir').textContent = 'Project duration ';
      document.getElementById('projectDuration-ansWatir').textContent = ': 18 months';
      document.getElementById('position-Watir').textContent = 'Position ';
      document.getElementById('position-ansWatir').textContent = ': Watir, South Sinai';
      document.getElementById('title-Suez').textContent = 'Suez Taxes Complex';
      document.getElementById('assignmentAuthority-Suez').textContent = 'Assignment Authority ';
      document.getElementById('assignmentAuthority-ansSuez').textContent = ': Ministry of Finance';
      document.getElementById('natureOfWork-Suez').textContent = 'Nature of work ';
      document.getElementById('natureOfWork-ansSuez').textContent = ': Construction';
      document.getElementById('projectDuration-Suez').textContent = 'Project duration ';
      document.getElementById('projectDuration-ansSuez').textContent = ': 18 months';
      document.getElementById('position-Suez').textContent = 'Position ';
      document.getElementById('position-ansSuez').textContent = ': Suez';
      document.getElementById('area-Suez').textContent = 'Area ';
      document.getElementById('area-ansSuez').textContent = ': 1500 square meters';
      document.getElementById('title-Beni-Suef').textContent = 'Beni Suef Security Directorate';
      document.getElementById('Beni-Suef-Description').textContent = 'The project consists of 7 floors, a basement, an information center, service offices, administrative offices, meeting rooms, security towers, and the general site.';
      document.getElementById('assignmentAuthority-Beni-Suef').textContent = 'Assignment Authority ';
      document.getElementById('assignmentAuthority-ansBeni-Suef').textContent = ': Ministry of Interior';
      document.getElementById('natureOfWork-Beni-Suef').textContent = 'Nature of work ';
      document.getElementById('natureOfWork-ansBeni-Suef').textContent = ': Construction';
      document.getElementById('projectDuration-Beni-Suef').textContent = 'Project duration ';
      document.getElementById('projectDuration-ansBeni-Suef').textContent = ': 18 months';
      document.getElementById('position-Beni-Suef').textContent = 'Position ';
      document.getElementById('position-ansBeni-Suef').textContent = ': Beni Suef';
      document.getElementById('area-Beni-Suef').textContent = 'Area ';
      document.getElementById('area-ansBeni-Suef').textContent = ': 15000 square meters';
      document.getElementById('title-Gamaleya').textContent = 'Gamaleya Police Complex';
      document.getElementById('Gamaleya-Description').textContent = 'It consists of a basement with 6 floors, entrance courtyard, men’s detention rooms, women’s detention rooms, administrative offices, warehouses, weapons storage, civil registry, computer laboratories, lecture halls.';
      document.getElementById('assignmentAuthority-Gamaleya').textContent = 'Assignment Authority ';
      document.getElementById('assignmentAuthority-ansGamaleya').textContent = ': Ministry of Interior';
      document.getElementById('natureOfWork-Gamaleya').textContent = 'Nature of work ';
      document.getElementById('natureOfWork-ansGamaleya').textContent = ': Construction';
      document.getElementById('projectDuration-Gamaleya').textContent = 'Project duration ';
      document.getElementById('projectDuration-ansGamaleya').textContent = ': 18 months';
      document.getElementById('position-Gamaleya').textContent = 'Position ';
      document.getElementById('position-ansGamaleya').textContent = ': Gamaleya , Cairo';
      document.getElementById('area-Gamaleya').textContent = 'Area ';
      document.getElementById('area-ansGamaleya').textContent = ': 5000 square meters';
      document.getElementById('title-Ismailia').textContent = 'Ismailia Culture Palace';
      document.getElementById('Ismailia-Description').textContent = 'The project components include a theatre, an exhibition hall, a conference hall, administrative offices, a summer theatre, and service spaces';
      document.getElementById('assignmentAuthority-Ismailia').textContent = 'Assignment Authority ';
      document.getElementById('assignmentAuthority-ansIsmailia').textContent = ': Ministry of Culture';
      document.getElementById('natureOfWork-Ismailia').textContent = 'Nature of work ';
      document.getElementById('natureOfWork-ansIsmailia').textContent = ': Developing and renovating';
      document.getElementById('projectDuration-Ismailia').textContent = 'Project duration ';
      document.getElementById('projectDuration-ansIsmailia').textContent = ': 18 months';
      document.getElementById('position-Ismailia').textContent = 'Position ';
      document.getElementById('position-ansIsmailia').textContent = ': Ismailia';
      document.getElementById('area-Ismailia').textContent = 'Area ';
      document.getElementById('area-ansIsmailia').textContent = ': 5000 square meters';
      document.getElementById('title-Alsayida').textContent = 'Alsayida Zaynab Taxes';
      document.getElementById('Alsayida-Description').textContent = 'The project components: 10 floors and three floors for customer service, administrative offices, archives, stores, service spaces, electricity rooms, camera rooms and UPS.';
      document.getElementById('assignmentAuthority-Alsayida').textContent = 'Assignment Authority ';
      document.getElementById('assignmentAuthority-ansAlsayida').textContent = ': Ministry of Finance';
      document.getElementById('natureOfWork-Alsayida').textContent = 'Nature of work ';
      document.getElementById('natureOfWork-ansAlsayida').textContent = ': Developing and renovating';
      document.getElementById('projectDuration-Alsayida').textContent = 'Project duration ';
      document.getElementById('projectDuration-ansAlsayida').textContent = ': 15 months';
      document.getElementById('position-Alsayida').textContent = 'Position ';
      document.getElementById('position-ansAlsayida').textContent = ': Alsayida Zaynab , Cairo';
      document.getElementById('title-Mut').textContent = 'Mut Culture Palace';
      document.getElementById('Mut-Description').textContent = 'The project components include a cinema, a theatre, warehouses, services, administrative offices, and temporary housing.';
      document.getElementById('assignmentAuthority-Mut').textContent = 'Assignment Authority ';
      document.getElementById('assignmentAuthority-ansMut').textContent =  ': Ministry of Culture';
      document.getElementById('natureOfWork-Mut').textContent = 'Nature of work ';
      document.getElementById('natureOfWork-ansMut').textContent = ': Developing and renovating';
      document.getElementById('projectDuration-Mut').textContent = 'Project duration ';
      document.getElementById('projectDuration-ansMut').textContent = ': 18 months';
      document.getElementById('position-Mut').textContent = 'Position ';
      document.getElementById('position-ansMut').textContent = ': Dakhla Oases, New Valley';
      document.getElementById('area-Mut').textContent = 'Area ';
      document.getElementById('area-ansMut').textContent = ': 2260 square meters';
      document.getElementById('title-Heliopolis').textContent = 'The main treatment station in New Heliopolis';
      document.getElementById('Heliopolis-Description').textContent = 'Project components: workshops and buildings, electromechanical works, administrative buildings, warehouses, lifting station, sewage treatment plant, road network, networks, general site.';
      document.getElementById('assignmentAuthority-Heliopolis').textContent = 'Assignment Authority ';
      document.getElementById('assignmentAuthority-ansHeliopolis').textContent =  ': Misr Algadida Company';
      document.getElementById('natureOfWork-Heliopolis').textContent = 'Nature of work ';
      document.getElementById('natureOfWork-ansHeliopolis').textContent = ': Infrastructure';
      document.getElementById('position-Heliopolis').textContent = 'Position ';
      document.getElementById('position-ansHeliopolis').textContent = ': New Heliopolis ,Suez Road';
      document.getElementById('title-El-Natroun').textContent = 'Wadi El-Natroun Culture Palace';
      document.getElementById('El-Natroun-Description').textContent = 'The project components include a theatre, multi-use halls, administrative offices, a public library, a bookstore, exhibition halls, computer labs, halls for women and children, and a VIP hall.';
      document.getElementById('assignmentAuthority-El-Natroun').textContent = 'Assignment Authority ';
      document.getElementById('assignmentAuthority-ansEl-Natroun').textContent =  ': Ministry of Culture';
      document.getElementById('natureOfWork-El-Natroun').textContent = 'Nature of work ';
      document.getElementById('natureOfWork-ansEl-Natroun').textContent = ': Construction';
      document.getElementById('projectDuration-El-Natroun').textContent = 'Project duration ';
      document.getElementById('projectDuration-ansEl-Natroun').textContent = ': 18 months';
      document.getElementById('position-El-Natroun').textContent = 'Position ';
      document.getElementById('position-ansEl-Natroun').textContent = ': Wadi El-Natroun';
      document.getElementById('area-El-Natroun').textContent = 'Area ';
      document.getElementById('area-ansEl-Natroun').textContent = ': 3755 square meters';
      document.getElementById('title-Al-Matamir').textContent = 'Abu Al Matamir Culture Palace';
      document.getElementById('Al-Matamir-Description').textContent = 'Project components: administrative offices, exhibitions, ceremony theatre, actors’ rooms, a VIP hall, a multi-use hall, and a hotel service for the teams.';
      document.getElementById('assignmentAuthority-Al-Matamir').textContent = 'Assignment Authority ';
      document.getElementById('assignmentAuthority-ansAl-Matamir').textContent =  ': Ministry of Culture';
      document.getElementById('natureOfWork-Al-Matamir').textContent = 'Nature of work ';
      document.getElementById('natureOfWork-ansAl-Matamir').textContent = ': Construction';
      document.getElementById('projectDuration-Al-Matamir').textContent = 'Project duration ';
      document.getElementById('projectDuration-ansAl-Matamir').textContent = ': 24 months';
      document.getElementById('position-Al-Matamir').textContent = 'Position ';
      document.getElementById('position-ansAl-Matamir').textContent = ': Beheira';
      document.getElementById('area-Al-Matamir').textContent = 'Area ';
      document.getElementById('area-ansAl-Matamir').textContent = ': 1200 square meters';
      document.getElementById('title-Al-Azhar').textContent = 'Development of Sheikhdom of Al-Azhar';
      document.getElementById('assignmentAuthority-Al-Azhar').textContent = 'Assignment Authority ';
      document.getElementById('assignmentAuthority-ansAl-Azhar').textContent = ': Ministry of Endowments';
      document.getElementById('natureOfWork-Al-Azhar').textContent = 'Nature of work ';
      document.getElementById('natureOfWork-ansAl-Azhar').textContent = ': Developing and renovating';
      document.getElementById('projectDuration-Al-Azhar').textContent = 'Project duration ';
      document.getElementById('projectDuration-ansAl-Azhar').textContent = ': 6 months';
      document.getElementById('position-Al-Azhar').textContent = 'Position ';
      document.getElementById('position-ansAl-Azhar').textContent = ': Al-Azhar , Cairo';
      document.getElementById('area-Al-Azhar').textContent = 'Area ';
      document.getElementById('area-ansAl-Azhar').textContent = ': 2000 square meters';
      document.getElementById('contactTitle').textContent = 'Contact Us';
      document.getElementById('contactAddressTitle').textContent = 'Address';
      document.getElementById('contactAddress').textContent = '2058, 1st District, Al-Hadaba Al-Wosta, El Mokattam, Cairo';
      document.getElementById('contactCallTitle').textContent = 'Call Us';
      document.getElementById('contactPhone').textContent = 'Phone 1 : (+098) 7654 3210';
      document.getElementById('contactEmailTitle').textContent = 'Email';
      document.getElementById('contactEmail').textContent = 'support@company.com';
  }
}


function toggleLanguage2(language){
  if(language==='ar'){
      document.getElementById('openHours').textContent = 'مفتوح: الأحد - الخميس: ٤ - ٩';
      document.getElementById('location').textContent = 'المقطم، محافظة القاهرة ٤٢٥٤٠٠٥';
      document.getElementById('quickEmail').textContent = 'البريد السريع';
      document.getElementById('phoneNumber').textContent = '+٤٧٨٥-٧٨٩ (٤٠٩) ١';
      document.getElementById('navHome').textContent = 'الرئيسية';
      document.getElementById('navServices').textContent = 'الخدمات';
      document.getElementById('navClients').textContent = 'عملاؤنا';
      document.getElementById('navNews').textContent = 'الصحافة والأخبار';
      document.getElementById('navProjects').textContent = 'المشاريع';
      document.getElementById('navContact').textContent = 'اتصل بنا';
      document.getElementById('navCareer').textContent = 'وظيفة';
      document.getElementById('navLanguage').textContent = 'اللغة';
      document.getElementById('offcanvasNavbarLabel').textContent = 'حراء';
      document.getElementById('navHomeMobile').textContent = 'الرئيسية';
      document.getElementById('navServicesMobile').textContent = 'الخدمات';
      document.getElementById('navNewsMobile').textContent = 'الصحافة والأخبار';
      document.getElementById('navProjectsMobile').textContent = 'المشاريع';
      document.getElementById('navClientsMobile').textContent = 'عملاؤنا';
      document.getElementById('navContactMobile').textContent = 'اتصل بنا';
      document.getElementById('navCareerMobile').textContent = 'وظيفة'
      document.getElementById('navLanguageMobile').textContent = 'اللغة';
      document.getElementById('title-Project-Cairo').textContent = 'مشارعنا';
      document.getElementById('FishfarmsKafrEl-Sheikh').textContent = 'مشروع المزارع السمكية بكفر الشيخ';
      document.getElementById('btn').textContent = 'لقراءة المزيد';
      document.getElementById('Biral-Abd').textContent = 'استصلاح ستة آلاف فدان بمدينة بئر العبد';
      document.getElementById('btn1').textContent = 'لقراءة المزيد';
      document.getElementById('CulturalCenterAbuSimbel').textContent = 'المركز الثقافي العالمي بأبو سمبل';
      document.getElementById('btn2').textContent = 'لقراءة المزيد';
      document.getElementById('TheaterPalaceQena').textContent = 'مسرح وقصر الثقافة قنا';
      document.getElementById('btn3').textContent = 'لقراءة المزيد';
      document.getElementById('MuseumIslandCivilization').textContent = 'متحف الجزيرة والحضارة';
      document.getElementById('btn4').textContent = 'لقراءة المزيد';
      document.getElementById('MuseumModernArt').textContent = 'متحف الفن الحديث';
      document.getElementById('btn5').textContent = 'لقراءة المزيد';
      document.getElementById('MuseumRatebSediq').textContent = 'متحف راتب صديق';
      document.getElementById('btn6').textContent = 'لقراءة المزيد';
      document.getElementById('PortSaiidTaxesComplex').textContent = 'مجمع ضرائب بورسعيد';
      document.getElementById('btn7').textContent = 'لقراءة المزيد';
      document.getElementById('PoliceOfficersClubNew').textContent = 'المبنى الجديد لنادي ضباط الشرطة';
      document.getElementById('btn8').textContent = 'لقراءة المزيد';
      document.getElementById('NationalTheatreTanta').textContent = 'المسرح القومي بطنطا';
      document.getElementById('btn9').textContent = 'لقراءة المزيد';
      document.getElementById('WadiWatir').textContent = 'السدود والبحيرات في وادي وتير';
      document.getElementById('btn10').textContent = 'لقراءة المزيد';
      document.getElementById('SuezTaxesComplex').textContent = 'مجمع ضرائب السويس';
      document.getElementById('btn11').textContent = 'لقراءة المزيد';
      document.getElementById('BeniSuefSecurityDirectorate').textContent = 'مديرية أمن بني سويف';
      document.getElementById('btn12').textContent = 'لقراءة المزيد';
      document.getElementById('GamaleyaPoliceComplex').textContent = 'مجمع شرطة الجمالية';
      document.getElementById('btn13').textContent = 'لقراءة المزيد';
      document.getElementById('museum-Project-Cairo').textContent = 'متحف الزعيم جمال عبد الناصر';
      document.getElementById('btn14').textContent = 'لقراءة المزيد';
      document.getElementById('bookcentre-Project-Cairo').textContent = 'الهيئة المصرية العامة للكتاب';
      document.getElementById('btn15').textContent = 'لقراءة المزيد';
      document.getElementById('MayComplex-Project-Cairo').textContent = 'مجمع 15 مايو للفنون';
      document.getElementById('btn16').textContent = 'لقراءة المزيد';
      document.getElementById('SafagaTaxComplex').textContent = 'مجمع ضرائب سفاجا';
      document.getElementById('IsmailiaCulturePalace').textContent = 'قصر ثقافة الاسماعيلية';
      document.getElementById('btn17').textContent = 'لقراءة المزيد';
      document.getElementById('MarsaAlamtaxes').textContent = 'ضرائب مرسى علم';
      document.getElementById('MutCulturePalace').textContent = 'قصر ثقافة موت';
      document.getElementById('btn18').textContent = 'لقراءة المزيد';
      document.getElementById('HajerAl-Adaysat').textContent = 'بيت ثقافة حاجر العديسات';
      document.getElementById('Sand-Basin').textContent = 'بيت ثقافة حوض الرمال';
      document.getElementById('Hibs-Cinema').textContent = 'سينما هيبس';
      document.getElementById('Ras-Hadaraba').textContent = 'بيت ثقافة رأس حدربة';
      document.getElementById('SheikhdomAl-Azhar').textContent = 'تطوير مشيخة الأزهر';
      document.getElementById('btn19').textContent = 'لقراءة المزيد';
      document.getElementById('Heliopolis').textContent = 'المحطة الرئيسية للمعالجة في هليوبوليس الجديدة';
      document.getElementById('btn20').textContent = 'لقراءة المزيد';
      document.getElementById('El-Natroun').textContent = 'قصر ثقافة وادي النطرون';
      document.getElementById('btn21').textContent = 'لقراءة المزيد';
      document.getElementById('Al-Matamir').textContent = 'قصر ثقافة أبو المطامير';
      document.getElementById('btn22').textContent = 'لقراءة المزيد';
      document.getElementById('Alsayida').textContent = 'ضرائب السيدة زينب';
      document.getElementById('btn23').textContent = 'لقراءة المزيد';
      document.getElementById('contactTitle').textContent = 'اتصل بنا';
      document.getElementById('contactAddressTitle').textContent = 'العنوان';
      document.getElementById('contactAddress').textContent = '2058، الحي الأول، الهضبة الوسطى، المقطم، القاهرة';
      document.getElementById('contactCallTitle').textContent = 'اتصل بنا';
      document.getElementById('contactPhone').textContent = 'الهاتف 1 : +٤٧٨٥-٧٨٩ (٤٠٩) ١';
      document.getElementById('contactEmailTitle').textContent = 'البريد الإلكتروني';
      document.getElementById('contactEmail').textContent = 'support@company.com';
  } else
  {
    document.getElementById('openHours').textContent = 'Open: sun - thu : 9 - 4';
    document.getElementById('location').textContent = 'El Mokattam, Cairo Governorate 4254005';
    document.getElementById('quickEmail').textContent = 'Quick Email';
    document.getElementById('phoneNumber').textContent = '+1 (409) 987–5874';
    document.getElementById('navHome').textContent = 'Home';
    document.getElementById('navServices').textContent = 'Services';
    document.getElementById('navClients').textContent = 'Our Clients';
    document.getElementById('navNews').textContent = 'Press and News';
    document.getElementById('navProjects').textContent = 'Projects';
    document.getElementById('navContact').textContent = 'Contact Us';
    document.getElementById('navCareer').textContent = 'Career';
    document.getElementById('navLanguage').textContent = 'Language';
    document.getElementById('offcanvasNavbarLabel').textContent = 'HERAA';
    document.getElementById('navHomeMobile').textContent = 'Home';
    document.getElementById('navServicesMobile').textContent = 'Services';
    document.getElementById('navNewsMobile').textContent = 'Press and News';
    document.getElementById('navProjectsMobile').textContent = 'Projects';
    document.getElementById('navClientsMobile').textContent = 'Our Clients';
    document.getElementById('navContactMobile').textContent = 'Contact Us';
    document.getElementById('navCareerMobile').textContent = 'Career';
    document.getElementById('navLanguageMobile').textContent = 'Language';
    document.getElementById('title-Project-Cairo').textContent = 'Our Projects';
    document.getElementById('FishfarmsKafrEl-Sheikh').textContent = 'Fish farms project in Kafr El-Sheikh';
    document.getElementById('btn').textContent = 'Read More';
    document.getElementById('Biral-Abd').textContent = 'Reclamation of six thousand acres in the city of Bir al-Abd';
    document.getElementById('btn1').textContent = 'Read More';
    document.getElementById('CulturalCenterAbuSimbel').textContent = 'The World Cultural Center in Abu Simbel';
    document.getElementById('btn2').textContent = 'Read More';
    document.getElementById('TheaterPalaceQena').textContent = 'Theater and Palace of Culture Qena';
    document.getElementById('btn3').textContent = 'Read More';
    document.getElementById('MuseumIslandCivilization').textContent = 'Museum of Island and Civilization';
    document.getElementById('btn4').textContent = 'Read More';
    document.getElementById('MuseumModernArt').textContent = 'Museum of Modern Art';
    document.getElementById('btn5').textContent = 'Read More';
    document.getElementById('MuseumRatebSediq').textContent = 'Museum of Rateb Sediq';
    document.getElementById('btn6').textContent = 'Read More';
    document.getElementById('PortSaiidTaxesComplex').textContent = 'Port Saiid Taxes Complex';
    document.getElementById('btn7').textContent = 'Read More';
    document.getElementById('PoliceOfficersClubNew').textContent = "Police Officers' Club New Building";
    document.getElementById('btn8').textContent = 'Read More';
    document.getElementById('NationalTheatreTanta').textContent = 'National Theatre of Tanta';
    document.getElementById('btn9').textContent = 'Read More';
    document.getElementById('WadiWatir').textContent = 'Dams and lakes in Wadi Watir';
    document.getElementById('btn10').textContent = 'Read More';
    document.getElementById('SuezTaxesComplex').textContent = 'Suez Taxes Complex';
    document.getElementById('btn11').textContent = 'Read More';
    document.getElementById('BeniSuefSecurityDirectorate').textContent = 'Beni Suef Security Directorate';
    document.getElementById('btn12').textContent = 'Read More';
    document.getElementById('GamaleyaPoliceComplex').textContent = 'Gamaleya Police Complex';
    document.getElementById('btn13').textContent = 'Read More';
    document.getElementById('museum-Project-Cairo').textContent = 'Museum of Leader Gamal Abdel Nasser';
    document.getElementById('btn14').textContent = 'Read More';
    document.getElementById('bookcentre-Project-Cairo').textContent = 'International Book Centre';
    document.getElementById('btn15').textContent = 'Read More';
    document.getElementById('MayComplex-Project-Cairo').textContent = 'May 15 Arts Complex';
    document.getElementById('btn16').textContent = 'Read More';
    document.getElementById('SafagaTaxComplex').textContent = 'Safaga Tax Complex';
    document.getElementById('IsmailiaCulturePalace').textContent = 'Ismailia Culture Palace';
    document.getElementById('btn17').textContent = 'Read More';
    document.getElementById('MarsaAlamtaxes').textContent = 'Marsa Alam taxes';
    document.getElementById('MutCulturePalace').textContent = 'Mut Culture Palace';
    document.getElementById('btn18').textContent = 'Read More';
    document.getElementById('HajerAl-Adaysat').textContent = 'Hajer Al-Adaysat Culture House';
    document.getElementById('Sand-Basin').textContent = 'Sand Basin Culture House';
    document.getElementById('Hibs-Cinema').textContent = 'Hibs Cinema';
    document.getElementById('Ras-Hadaraba').textContent = 'Ras Hadaraba Culture House';
    document.getElementById('SheikhdomAl-Azhar').textContent = 'Development of Sheikhdom of Al-Azhar';
    document.getElementById('btn19').textContent = 'Read More';
    document.getElementById('Heliopolis').textContent = 'The main treatment station in New Heliopolis';
    document.getElementById('btn20').textContent = 'Read More';
    document.getElementById('El-Natroun').textContent = 'Wadi El-Natroun Culture Palace';
    document.getElementById('btn21').textContent = 'Read More';
    document.getElementById('Al-Matamir').textContent = 'Abu Al Matamir Culture Palace';
    document.getElementById('btn22').textContent = 'Read More';
    document.getElementById('Alsayida').textContent = 'Alsayida Zaynab Taxes';
    document.getElementById('btn23').textContent = 'Read More';
    document.getElementById('contactTitle').textContent = 'Contact Us';
    document.getElementById('contactAddressTitle').textContent = 'Address';
    document.getElementById('contactAddress').textContent = '2058, 1st District, Al-Hadaba Al-Wosta, El Mokattam, Cairo';
    document.getElementById('contactCallTitle').textContent = 'Call Us';
    document.getElementById('contactPhone').textContent = 'Phone 1 : (+098) 7654 3210';
    document.getElementById('contactEmailTitle').textContent = 'Email';
    document.getElementById('contactEmail').textContent = 'support@company.com';
  } 
}
function toggleLanguage3(language){
  const textElement = document.getElementById('aboutText');
  if(language ==='ar')
  {
    textElement.classList.remove('ltr');
    textElement.classList.add('rtl');
      document.getElementById('openHours').textContent = 'مفتوح: الأحد - الخميس: ٤ - ٩';
      document.getElementById('location').textContent = 'المقطم، محافظة القاهرة ٤٢٥٤٠٠٥';
      document.getElementById('quickEmail').textContent = 'البريد السريع';
      document.getElementById('phoneNumber').textContent = '+٤٧٨٥-٧٨٩ (٤٠٩) ١';
      document.getElementById('navHome').textContent = 'الرئيسية';
      document.getElementById('navServices').textContent = 'الخدمات';
      document.getElementById('navClients').textContent = 'عملاؤنا';
      document.getElementById('navNews').textContent = 'الصحافة والأخبار';
      document.getElementById('navProjects').textContent = 'المشاريع';
      document.getElementById('navContact').textContent = 'اتصل بنا';
      document.getElementById('navCareer').textContent = 'وظيفة';
      document.getElementById('navLanguage').textContent = 'اللغة';
      document.getElementById('offcanvasNavbarLabel').textContent = 'حراء';
      document.getElementById('navHomeMobile').textContent = 'الرئيسية';
      document.getElementById('navServicesMobile').textContent = 'الخدمات';
      document.getElementById('navNewsMobile').textContent = 'الصحافة والأخبار';
      document.getElementById('navProjectsMobile').textContent = 'المشاريع';
      document.getElementById('navClientsMobile').textContent = 'عملاؤنا';
      document.getElementById('navContactMobile').textContent = 'اتصل بنا';
      document.getElementById('navCareerMobile').textContent = 'وظيفة'
      document.getElementById('navLanguageMobile').textContent = 'اللغة';
      document.getElementById('name').textContent = 'الاسم';
      document.getElementById('email').textContent = 'الايميل';
      document.getElementById('cv').textContent = 'رفع الملف الشخصي';
      document.getElementById('submit').textContent = 'ارسال';
      document.getElementById('career-title').textContent = 'وظيفة';
      document.getElementById('job-offer-1').textContent = 'وظيفة المطلوبة';
      document.getElementById('job-name-1').textContent = ' : مهندس';
      document.getElementById('job-description-1').textContent = 'المسمى الوظيفي';
      document.getElementById('job-descriptiontext-1').textContent = ' : مهندس مدني مهندس';
      document.getElementById('contactTitle').textContent = 'اتصل بنا';
      document.getElementById('contactAddressTitle').textContent = 'العنوان';
      document.getElementById('contactAddress').textContent = '2058، الحي الأول، الهضبة الوسطى، المقطم، القاهرة';
      document.getElementById('contactCallTitle').textContent = 'اتصل بنا';
      document.getElementById('contactPhone').textContent = 'الهاتف 1 : (+098) 7654 3210';
      document.getElementById('contactEmailTitle').textContent = 'البريد الإلكتروني';
      document.getElementById('contactEmail').textContent = 'support@company.com';
  }
  if(language==='en')
  {
    textElement.classList.remove('rtl');
    textElement.classList.add('ltr');
    document.getElementById('openHours').textContent = 'Open: sun - thu : 9 - 4';
    document.getElementById('location').textContent = 'El Mokattam, Cairo Governorate 4254005';
    document.getElementById('quickEmail').textContent = 'Quick Email';
    document.getElementById('phoneNumber').textContent = '+1 (409) 987–5874';
    document.getElementById('navHome').textContent = 'Home';
    document.getElementById('navServices').textContent = 'Services';
    document.getElementById('navClients').textContent = 'Clients';
    document.getElementById('navNews').textContent = 'Press and News';
    document.getElementById('navProjects').textContent = 'Projects';
    document.getElementById('navContact').textContent = 'Contact Us';
    document.getElementById('navCareer').textContent = 'Career'
    document.getElementById('navLanguage').textContent = 'Language';
    document.getElementById('offcanvasNavbarLabel').textContent = 'HERAA';
    document.getElementById('navHomeMobile').textContent = 'Home';
    document.getElementById('navAboutMobile').textContent = 'About';
    document.getElementById('navServicesMobile').textContent = 'Services';
    document.getElementById('navNewsMobile').textContent = 'Press and News';
    document.getElementById('navProjectsMobile').textContent = 'Projects';
    document.getElementById('navClientsMobile').textContent = 'Our Clients';
    document.getElementById('navContactMobile').textContent = 'Contact Us';
    document.getElementById('navCareerMobile').textContent = 'Career'
    document.getElementById('navLanguageMobile').textContent = 'Language';
    document.getElementById('name').textContent = 'Name';
    document.getElementById('email').textContent = 'Email';
    document.getElementById('cv').textContent = 'Upload CV';
    document.getElementById('submit').textContent = 'Submit';
    document.getElementById('career-title').textContent = 'Career';
    document.getElementById('job-offer-1').textContent = 'Job Offer';
    document.getElementById('job-name-1').textContent = ' : Engineer';
    document.getElementById('job-description-1').textContent = 'Job Description';
    document.getElementById('job-descriptiontext-1').textContent = ' : engineerrrrrdfff';
    document.getElementById('contactTitle').textContent = 'Contact Us';
    document.getElementById('contactAddressTitle').textContent = 'Address';
    document.getElementById('contactAddress').textContent = '2058, 1st District, Al-Hadaba Al-Wosta, El Mokattam, Cairo';
    document.getElementById('contactCallTitle').textContent = 'Call Us';
    document.getElementById('contactPhone').textContent = 'Phone 1 : (+098) 7654 3210';
    document.getElementById('contactEmailTitle').textContent = 'Email';
    document.getElementById('contactEmail').textContent = 'support@company.com';
  }
}