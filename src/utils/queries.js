import { gql } from "@apollo/client";

export const HOMEPAGE = gql`
{homepage{data{attributes{nadpis1 nadpis2 nadpis3 clanek1 clanek2 clanek3 picture1{data{attributes{url}}} picture2{data{attributes{url}}} picture3{data{attributes{url}}} }}}}`;

export const PLAYERS = gql`
{players{
  data{
    id
    attributes{
      jmenoprijmeni 
      datumnarozeni 
      vyska 
      vaha 
      vtymuod 
      team{
        data{
          attributes{
            jmeno}}}
      post{
        data{
          attributes{
            post}}}
      state{
        data{
          attributes{
            State}}}
      cislodresu 
      obrazek{
        data{
          attributes{
            url}}}}}}}
`

export const STADIONS = gql`
{stadions{data{id attributes{jmeno kapacita obrazek{data{attributes{url}}}}}}}
`

export const TEAMS = gql`
{teams{
  data{
  id
  attributes{
    jmeno 
    zkratka 
    logo{
      data{
        attributes{
          url}}}
  }}}}
`

export const PLAYER = gql`
query player($id: ID!){
  player(id: $id){
  data{
    id
    attributes{
      jmenoprijmeni 
      datumnarozeni 
      vyska 
      vaha 
      vtymuod 
      team{
        data{
          attributes{
            jmeno}}}
      post{
        data{
          attributes{
            post}}}
      state{
        data{
          attributes{
            State}}}
      cislodresu 
      obrazek{
        data{
          attributes{
            url}}}}}}}
`