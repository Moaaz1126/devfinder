let funAndEle = {
    name: "",
    followers: 0,
    follwing: 0, 
    photo: "",
    bio: "",
    joined: "",
    repos: 0,
    twitter: "",
    map: "",
    profile: "",
    id: 0000,
    work: "", 

    nameSet: function() {
        let ele = document.querySelector("#name")
        ele.textContent = this.name
        if(this.name == "null" || this.name == "undefined" || this.name === null || this.name === undefined) {
            ele.textContent = "Not available"
        }
    },
    followersSet: function() {
        let ele = document.querySelector("#followers")
        ele.textContent = this.followers
    },
    follwingSet: function() {
        let ele = document.querySelector("#follwing")
        ele.textContent = this.follwing
    } ,
    photoSet: function() {
        let ele = document.querySelector("#img")
        ele.src = this.photo
    },
    bioSet: function() {
        let ele = document.querySelector("#des")
        ele.textContent = this.bio
        if(this.bio == "null" || this.bio == "undefined" || this.bio === null) {
            ele.textContent = "Not available"
        }
    },
    joinedSet: function() {
        let ele = document.querySelector("#join")
        ele.textContent = this.joined
    },
    reposSet: function() {
        let ele = document.querySelector("#repos")
        ele.textContent = this.repos
    },
    twitterSet: function() {
        let ele = document.querySelector("#twitterEle")
        ele.textContent = this.twitter
        if(this.twitter == "null" || this.twitter == "undefined" || this.twitter === null || this.twitter === undefined || this.twitter === undefined) {
            ele.textContent = "Not available"
        }
    },
    mapSet: function() {
        let ele = document.querySelector("#inEle")
        ele.textContent = this.map
        if(this.map == "null" || this.map == "undefined" || this.map === null) {
            ele.textContent = "Not available"
        }
    },
    profileSet: function() {
        let ele = document.querySelector("#linkEle")
        ele.textContent = this.profile
        if(this.profileSet == "null" || this.profile == "undefined" || this.profile === null || this.profile == "") {
            ele.textContent = "Not available"
        }
    },
    idSet: function() {
        let ele = document.querySelector("#id")
        ele.textContent = this.id
    },
    workSet: function() {
        let ele = document.querySelector("#workEle")
        ele.textContent = this.work
        if(this.work == "null" || this.work == "undefined" || this.work === null || this.work === undefined) {
            ele.textContent = "Not available"
        }
    }
};
let nameid = 667687
function GetDate(userName) {
    nameid = userName
    $.getJSON(`https://api.github.com/users/${userName}`, function(date) {
        funAndEle.name = date.name
        funAndEle.followers = date.followers
        funAndEle.follwing = date.following
        funAndEle.work = date.company
        funAndEle.bio = date.bio 
        funAndEle.map = date.location
        funAndEle.id = date.login
        let Createdate = date.created_at;
        let dateArray = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
        let one = `${Createdate[5]}${Createdate[6]}`
        let two = `${Createdate[8]}${Createdate[9]}`
        funAndEle.joined = `Joined ${Createdate[0]}${Createdate[1]}${Createdate[2]}${Createdate[3]} ${dateArray[+one]} ${+two}`
        funAndEle.photo = date.avatar_url
        funAndEle.profile = date.blog
        funAndEle.repos = date.public_repos
        funAndEle.twitter = date.twitter_username
    }).fail(function() {
        alert(`The developer(${nameid}) Not Found`)
    });
}
function SetDate() {
    funAndEle.bioSet()
    funAndEle.followersSet()
    funAndEle.follwingSet()
    funAndEle.idSet()
    funAndEle.joinedSet()
    funAndEle.mapSet()
    funAndEle.nameSet()
    funAndEle.photoSet()
    funAndEle.profileSet()
    funAndEle.reposSet()
    funAndEle.twitterSet()
    funAndEle.workSet()
}
function finder() {
    let ele = document.querySelector("#input").value
    GetDate(ele)
    SetDate()
}
function DarkAndLight() {
    let rootEle = document.querySelector(':root')
    let i = document.querySelector("#lightAdarki")
    let text = document.querySelector("#lightAdark")
    if(text.textContent == "Light") {
        text.textContent = "Dark";
        i.classList.remove("fa-sun");
        i.classList.add("fa-moon")
        console.log("light")
        document.documentElement.style.setProperty('--textColor', 'black');
        document.documentElement.style.setProperty('--background', "#f5f8ff")
        document.documentElement.style.setProperty('--numbersColor', "#f5f8ff")
        document.documentElement.style.setProperty('--eleColor', "#fefefe")
    } else {
        text.textContent = "Light";
        i.classList.add("fa-sun");
        i.classList.remove("fa-moon")
        document.documentElement.style.setProperty('--textColor', 'white');
        document.documentElement.style.setProperty('--background', "#141c2f")
        document.documentElement.style.setProperty('--numbersColor', "#151c30")
        document.documentElement.style.setProperty('--eleColor', "#1f2a48")
    }
}
