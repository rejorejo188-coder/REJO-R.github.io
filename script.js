// =====================================================
// DARK / LIGHT MODE
// =====================================================

const themeBtn =
    document.getElementById("themeBtn");


themeBtn.addEventListener(
    "click",
    function () {

        document.body.classList.toggle(
            "light-mode"
        );


        if (
            document.body.classList.contains(
                "light-mode"
            )
        ) {

            themeBtn.textContent = "☀️";

        }

        else {

            themeBtn.textContent = "🌙";

        }

    }
);



// =====================================================
// CONTACT FORM
// =====================================================

const contactForm =
    document.getElementById(
        "contactForm"
    );


contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "visitorName"
            ).value.trim();


        const email =
            document.getElementById(
                "visitorEmail"
            ).value.trim();


        const subject =
            document.getElementById(
                "visitorSubject"
            ).value.trim();


        const message =
            document.getElementById(
                "visitorMessage"
            ).value.trim();



        if (
            !name ||
            !email ||
            !subject ||
            !message
        ) {

            alert(
                "Please fill in all fields."
            );

            return;

        }



        let messages =
            JSON.parse(
                localStorage.getItem(
                    "portfolioMessages"
                )
            ) || [];



        const newMessage = {

            "Date & Time":
                new Date().toLocaleString(),

            "Name":
                name,

            "Email":
                email,

            "Subject":
                subject,

            "Message":
                message

        };



        messages.push(
            newMessage
        );



        localStorage.setItem(
            "portfolioMessages",
            JSON.stringify(messages)
        );



        alert(
            "Thank you! Your message has been saved successfully."
        );



        contactForm.reset();

    }
);



// =====================================================
// DOWNLOAD CONTACT MESSAGES AS EXCEL
// =====================================================

const downloadButton =
    document.getElementById(
        "downloadMessages"
    );


downloadButton.addEventListener(
    "click",
    function() {


        const messages =
            JSON.parse(
                localStorage.getItem(
                    "portfolioMessages"
                )
            ) || [];



        if (
            messages.length === 0
        ) {

            alert(
                "No messages available yet."
            );

            return;

        }



        const worksheet =
            XLSX.utils.json_to_sheet(
                messages
            );



        worksheet["!cols"] = [

            {
                wch: 22
            },

            {
                wch: 22
            },

            {
                wch: 32
            },

            {
                wch: 30
            },

            {
                wch: 60
            }

        ];



        const workbook =
            XLSX.utils.book_new();



        XLSX.utils.book_append_sheet(
            workbook,
            worksheet,
            "Messages"
        );



        XLSX.writeFile(
            workbook,
            "portfolio_contact_messages.xlsx"
        );

    }
);



// =====================================================
// CURRENT YEAR
// =====================================================

const year =
    document.getElementById(
        "year"
    );


year.textContent =
    new Date().getFullYear();