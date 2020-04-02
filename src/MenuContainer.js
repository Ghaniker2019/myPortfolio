import React from "react";

class MenuContainer extends React.Component {
    render() {
        return (<div style={
            {
                backgroundColor: "#E9E8E4"
            }
        }> <nav style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 60,
                padding: 12,
                backgroundColor: "#f7f7f7"
            }}>
                <ul style={{ display: "flex",
                        flex: 1,
                        listStyle: "none",
                        margin: 0,
                        border: 0,
                        fontSize: 20,
                        verticalAlign: "baseline"}}>
                    <li style={{
                                marginRight: 160,
                                marginLeft: 140
                            }} ><a style={{
                                    color: "#636363",
                                    textDecoration: "none"
                                }}
                            href="#section01" >
                            Qui suis - je ?</a> 
                            </li> 
                            <li style={{
                                        marginRight: 160
                                    }} >
                                <a style={{
                                            color: "#636363",
                                            textDecoration: "none"
                                        }}
                                    href="#section02" >
                                    Projects </a> </li> <li style={{
                                                marginRight: 160
                                            }} ><a style={
                                                {
                                                    color: "#636363",
                                                    textDecoration: "none"
                                                }
                                            }
                                            href="#section03" >
                                            Compétences </a> </li> <li style={
                                                    {
                                                        marginRight: 140
                                                    }
                                                } >
                                                <a style={
                                                        {
                                                            color: "#636363",
                                                            textDecoration: "none"
                                                        }
                                                    }
                                                    href="#section04" >
                                                    Contact </a> </li> </ul> </nav>
                                        
			<section id="section01" >
                                                        <div >
                                                            <h1 style={
                                                                    {
                                                                        paddingBottom: 10,
                                                                        borderBottomStyle: "solid",
                                                                        borderBottomColor: " #615494",
                                                                        fontStyle: ""
                                                                    }
                                                                } >
                                                                Qui suis - je </h1> <p >
                                                                    Je m 'appelle Kerkoub Abdelghani. Je suis développeur Web & Mobile
                                                                    depuis 1 ans déjà.J 'ai été formé au Reacteur (Paris) où j'
                                                                    ai pu apprendre à réaliser des sites Internet et applications Mobile.Mon expérience dans le développement m 'a permis de monter
			rapidement en compétences, sur plusieurs technologies prisées des startups ou grands groupes.Vous trouverez sur ce blog, mes derniers projets. </p> </div> </section>
                                                        
			<section id="section02" >
                                                                        <article style={
                                                                                {
                                                                                    textAlign: "center"
                                                                                }
                                                                            } >
                                                                            <h2 > Mes derniers projects </h2> <div >
                                                                                    <p > Voici quelques projets Web réalisés ces derniers temps. </p> </div> <div style={
                                                                                                {
                                                                                                    display: "flex",
                                                                                                    alignItems: "center",
                                                                                                    justifyContent: "center"
                                                                                                }
                                                                                            } >
                                                                                            <img style={
                                                                                                    {
                                                                                                        height: 300,
                                                                                                        width: 600,
                                                                                                        maxWidth: "100%",
                                                                                                        position: "relative",
                                                                                                        margin: "10 10 10 10"
                                                                                                    }
                                                                                                }
                                                                                                src={
                                                                                                    require("./img/allocine.png")
                                                                                                }
                                                                                                alt="allocine" /
                                                                                            >
                                                                                            </div> <h3 > Allocine </h3> <p style={
                                                                                                        {
                                                                                                            paddingBottom: 30
                                                                                                        }
                                                                                                    } >
                                                                                                    Ceci est un site réalisé pour la société lambda.Il a été créé grâce au langage HTML et CSS. </p> <a style={
                                                                                                            {
                                                                                                                textDecoration: "none",
                                                                                                                border: "solid 1px #DCDCDC",
                                                                                                                padding: 14,
                                                                                                                borderRadius: 5
                                                                                                            }
                                                                                                        }
                                                                                                        href="https://allocine.fr"
                                                                                                        target="_blank" rel="noopener noreferrer">
                                                                                                        
                                                                                                        Voir le site </a> </article> </section>
                                                                                            
			<section id="section03" >
                                                                                                            <h1 style={
                                                                                                                    {
                                                                                                                        justifyContent: "flex-end"
                                                                                                                    }
                                                                                                                } > Section 03 </h1> </section>
                                                                                                    
			<section id="section04" >
                                                                                                                    <h1 > Section 04 </h1> </section> </div>
                                                                                                                    );
                                                                                                                }
                                                                                                            }
                                                                                                            
export default MenuContainer ;