import React, { Component } from 'react'

export class MenuItem extends Component {
    render() {
        let { title, description, urlToImage, url } = this.props;
        return (
            <>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12">
                            <div id="inam" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="container">
                                            <div class="row">

                                                <div class="col-sm-12 col-lg-4">
                                                    <div class="card" style="width: 300px;">
                                                        <img src={urlToImage} class="card-img-top" />
                                                        <div class="card-body">
                                                            <h4 class="card-title">{title}</h4>
                                                            <p class="card-text">{description}</p>
                                                            <button href={url} type="button" class="btn btn-warning">Read More</button>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>





                                </div>

                            </div>
                            <a href="#inam" class="carousel-control-prev" data-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                            </a>
                            <a href="#inam" class="carousel-control-next" data-slide="next">
                                <span class="carousel-control-next-icon"></span>
                            </a>

                        </div>

                    </div>

                </div>
            </>
        )
    }
}

export default MenuItem