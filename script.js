
    const data = [
{ Name: 'SASHANG AHIR', DOB: '12.02.2013', Grade: '7', School: 'UNIVERSAL', Prize: '2ND', Mobile: '9769632957' },
{ Name: 'ATHARVA NOMUL', DOB: '30.12.2016', Grade: '4', School: 'EUROSCHOOL THANE', Prize: '1ST', Mobile: '9004300635' },
{ Name: 'YUTIKA KHALI', DOB: '18.01.2015', Grade: '6', School: 'NEW HORIZON SCHOLARS SCHOOL', Prize: '1ST', Mobile: '8439304241' },
{ Name: 'NEEL DHANANJAY KULKARNI', DOB: '09.01.2016', Grade: '4', School: 'HIRANANDANI FOUNDATION SCHOOL', Prize: '2ND', Mobile: '7021387824' },
{ Name: 'JIVESH DINANATH MANERA', DOB: '16.06.2014', Grade: '6', School: 'NEW HORIZON SCHOLARS SCHOOL', Prize: '1ST', Mobile: '9820738057' },
{ Name: 'AARSHABH YOGESH DESHPANDE', DOB: '25.09.2013', Grade: '7', School: 'DELHI PUBLIC SCHOOL', Prize: '2ND', Mobile: '9764445380' },
{ Name: 'ANIRBAN CHATTERJEE', DOB: '17.10.2017', Grade: '2', School: 'AVISHKAR SCHOOL', Prize: '2ND', Mobile: '9898905994' },
{ Name: 'ASISH KUMAR TEWARY', DOB: '07.01.2017', Grade: '3', School: 'DELHI PUBLIC SCHOOL', Prize: 'CHAMPION', Mobile: '8972175579' },
{ Name: 'AKSHARA PRASHANT SHEWALE', DOB: '19.10.2017', Grade: '2', School: 'NEW HORIZON SCHOLARS SCHOOL', Prize: '1ST', Mobile: '8779421045' },
{ Name: 'YUVAAN RAMKUMAR SHARMA', DOB: '19.12.2018', Grade: '1', School: 'HIRANANDANI FOUNDATION SCHOOL', Prize: '3RD', Mobile: '7889641264' },
{ Name: 'RIDANT TALWAR', DOB: '18.08.2018', Grade: '1', School: 'HFS THANE', Prize: '2ND', Mobile: '9324963909' },
{ Name: 'ASVI BHAVYA', DOB: '28.05.2015', Grade: '5', School: 'NARAYANA ETECHNO THANE', Prize: '1ST', Mobile: '8369022084' },
{ Name: 'DARSHIL RUPESH CHORGE', DOB: '16.04.2017', Grade: '3', School: 'NEW HORIZON SCHOLAR SCHOOL AND NEO KIDS', Prize: '1ST', Mobile: '9870069924' },
{ Name: 'ABHIDNYA ABHISHEK MANE', DOB: '02.09.2017', Grade: '3', School: 'NEW HORIZON SCHOLARS SCHOOL THANE', Prize: '3RD', Mobile: '9819409655' },
{ Name: 'ARNAV PRASHANT ZADE', DOB: '25.02.2018', Grade: '2', School: 'SRI MA VIDYALAYA', Prize: 'CHAMPION', Mobile: '9766333075' },
{ Name: 'AARUSHI SINGH', DOB: '05.03.2012', Grade: '8', School: 'HIRANANDANI FOUNDATION SCHOOL', Prize: 'CHAMPION', Mobile: '9029037022' },
{ Name: 'AEINDRI ROY', DOB: '04.08.2014', Grade: '6', School: 'DELHI PUBLIC SCHOOL', Prize: '3RD', Mobile: '9748012759' },
{ Name: 'ARYAN AWINASH FARDE', DOB: '18.02.2013', Grade: '7', School: 'SARSWATI VIDYAMANDIR ENGLISH MEDIUM SCHOOL', Prize: 'COC', Mobile: '9075466966' },
{ Name: 'VIAAN VINOD GHOLAP', DOB: '02.04.2018', Grade: '2', School: 'BIRLA BRAINIACS', Prize: 'CHAMPION', Mobile: '8484817044' },
{ Name: 'ISHAAN YOGESH DESAI', DOB: '25.02.2015', Grade: '6', School: 'TANARATA INTERNATIONAL SCHOOL', Prize: 'CHAMPION', Mobile: '9136930105' },
{ Name: 'ADVIKA SUBIN', DOB: '08.06.2017', Grade: '2', School: 'AAVISHKAR', Prize: '2ND', Mobile: '7012085930' },
{ Name: 'AARAVI YOGESH SURKAR', DOB: '03.02.2020', Grade: '1', School: 'DAFFODILS', Prize: 'COC', Mobile: '7777080614' },
{ Name: 'TRISHA ACHARJEE', DOB: '25.04.2018', Grade: '2', School: 'VISHWAJYOT HIGH SCHOOL', Prize: '2ND', Mobile: '9706505789' },
{ Name: 'PRANSHULSINH RONAKSINH RANA', DOB: '07.08.2016', Grade: '4', School: 'APOLLO INTERNATIONAL SCHOOL', Prize: '2ND', Mobile: '9558521818' },
{ Name: 'PRIYANSHU MUKHOPADHYAY', DOB: '08.05.2016', Grade: '3', School: 'NEW HORIZON SCHOLAR SCHOOL', Prize: 'CHAMPION', Mobile: '9932026587' }
    ];


document.getElementById('fetchButton').addEventListener('click', function() {
    const mobileNumber = document.getElementById('mobileNumber').value.trim();

    // Find the user data based on the mobile number
    const userDetails = data.find(user => user.Mobile === mobileNumber);

    // Check if the mobile number is valid
    if (userDetails) {
        // Display the found user's details in the dialog box
        document.getElementById('name').textContent = userDetails.Name;
        document.getElementById('dob').textContent = userDetails.DOB;
        document.getElementById('grade').textContent = userDetails.Grade;
        document.getElementById('school').textContent = userDetails.School;
        document.getElementById('prize').textContent = userDetails.Prize;

        // Show the dialog box
        const dialog = document.getElementById('detailsDialog');
        dialog.style.display = 'flex'; // Show dialog using flex display

        // Redirect to Facebook page after displaying details
        setTimeout(function() {
            window.location.href = "https://www.facebook.com/eagerbeaverabacus/reviews";  // Replace with your Facebook page link
        }, 1750); // Redirect after 2 seconds
    } else {
        alert("No details found for this mobile number.");
    }
});

