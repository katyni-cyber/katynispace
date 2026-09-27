/* =========================
   MY ROOM MESSAGE
========================= */

function roomMessage(text) {

    const message =
        document.getElementById("roomMessage");

    if (message) {
        message.textContent = text;
    }

}


/* =========================
   OPEN COMPUTER
========================= */

function openRoomComputer() {

    const popup =
        document.getElementById("roomComputerPopup");

    if (popup) {
        popup.classList.add("open");
    }

}


/* =========================
   CLOSE COMPUTER
========================= */

function closeRoomComputer() {

    const popup =
        document.getElementById("roomComputerPopup");

    if (popup) {
        popup.classList.remove("open");
    }

}


/* =========================
   CLICK OUTSIDE COMPUTER
========================= */

document.addEventListener("click", function(event) {

    const popup =
        document.getElementById("roomComputerPopup");

    if (
        popup &&
        event.target === popup
    ) {

        closeRoomComputer();

    }

});


/* =========================
   ESCAPE KEY
========================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeRoomComputer();

    }

});