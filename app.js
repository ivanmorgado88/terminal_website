document.addEventListener('DOMContentLoaded', function () {
    
    document.getElementById('form').onsubmit = function (evt) {
        evt.preventDefault();
        checkWord();
        window.scrollTo(0, 150);
    }


    document.getElementById('terminalTextInput').focus();
    
    var textInputValue = document.getElementById('terminalTextInput').value.trim();
    
    var textResultValue = document.getElementById('terminalResultsCont').innerHTML;
    
    var clearInput = function () {
        document.getElementById('terminalTextInput').value = "";
    }
    
    var scrollToBottomOfResults = function () {
        var terminalResultsDiv = document.getElementById('terminalResultsCont');
        terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
    }

    scrollToBottomOfResults();

    var addTextToResults = function (textToAdd) {
        document.getElementById('terminalResultsCont').innerHTML += "<p>" + textToAdd + "<p>";
        scrollToBottomOfResults();
    }


    var postHelpList = function () {
        var helpKeyWords = [
            "-Open to search on Google",
            "- 'Time' will display the current time.",
            "- 'Date' will display the current date.",
        ].join('<br>');
        addTextToResults(helpKeyWords);
    }
    
    
    var getTimeAndDate = function (postTimeDay) {
        var timeAndDate = new Date();
        var timeHours = timeAndDate.getHours();
        var timeMinutes = timeAndDate.getUTCMinutes();
        var dateDay = timeAndDate.getDate();
        console.log(dateDay);
        var dateMonth = timeAndDate.getMonth() + 1;
        var dateYear = timeAndDate.getFullYear();
        if (timeHours < 10) {
            timeHours = "0" + timeHours;
        }
        if (timeMinutes < 10) {
            timeMinutes = "0" + timeMinutes;
        }
        var currentTime = timeHours + ":" + timeMinutes;
        var currentDate = dateDay + "/" + dateMonth + "/" + dateYear;
        if (postTimeDay == "time") {
            addTextToResults(currentTime);
        }
        if (postTimeDay == "date") {
            addTextToResults(currentDate);
        }
    }
    var openLinkInNewWindow = function (linkToOpen) {
        window.open(linkToOpen, '_blank');
        clearInput();
    }
    var textReplies = function () {
        switch (textInputValueLowerCase) {
            case "founder":
                clearInput
                addTextToResults("Ivan")
                break;
            case "time":
                clearInput();
                getTimeAndDate("time")
                break;
            case "date":
                clearInput();
                getTimeAndDate("date");
                break;
            case "help":
            case "?":
                clearInput();
                console.log('HELP ME')
                postHelpList();
                break;
            default:
                clearInput();
                addTextToResults("not found")
        }
    }
    var checkWord = function(){
        textInputValue = document.getElementById('terminalTextInput').value.trim();
        textInputValueLowerCase = textInputValue.toLowerCase();
        if (textInputValue != ""){
            addTextToResults("<p class = 'userEnteredText'>>" + textInputValue + "</p>");
            if(textInputValueLowerCase.substr(0,5) == "open"){
                openLinkInNewWindow('http://google.com');
            }
        else{
            textReplies();
            }
        }
    }
})