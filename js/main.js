let API = "http://localhost:7000/modal";

render();

$(".btn-add").on("click", function () {
    let newMovie = {
        title: $(".card-title").val(),
        image: $(".card-img-top-inp").val(),
    };

    fetch(API, {
        method: "POST",
        body: JSON.stringify(newMovie),
        headers: {
            "Content-Type": "application/json",
        },
    }).then(() => render());
});

function render() {
    fetch(API)
        .then((res) => res.json())
        .then((movieData) => {
            $(".roww-2").html("");
            movieData.forEach((item) => {
                $(".roww-2").append(`
                <div class="col-md-4">
                    <!-- карточка с bootsrt -->
                    <div class="card card-ava" style="width: 18rem">
                        <img src=${item.image}" class="card-img-top" style=width:20px;height:20px; />
                        <div class="card-body">
                            <h5 class="card-title">${item.title}</h5>
                        </div>
                        <ul class="list-group list-group-flush" >
                            <div class="inline-like-com">
                                <!-- like -->
                                <span>
                                    <button class="btn-like">
                                        <img src="img/heart (1).png" alt="">
                                    </button>
                                </span>like
                                <!-- comment -->
                                <span>
                                    <button class="btn-comment">
                                        <img src="img/comment.png" alt="" />
                                    </button>
                                </span>comm
                            </div>                        
                        </ul>
                        <div class="card-body">
                            <button class="btn-edit">Edit</button>
                            <button class="btn-delete" id=${item.id} >Delete</button>
                        </div>
                    </div>
                    <!-- End of карточка  -->
                </div>
                `);
            });
        });
}

$("body").on("click", ".btn-delete", function (e) {
    let id = e.target.id;
    fetch(`${API}/${id}/`, {
        method: "DELETE",
    }).then(() => render());
});
