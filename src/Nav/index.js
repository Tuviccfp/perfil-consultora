import * as React from 'react'
import styled from 'styled-components'

const ButtonList = styled.select`
 border: 1px solid transparent;
 border-radius: 20px;
 background-color: whitesmoke;
 list-style: none;
 padding-inline-start: 0px;
 margin-bottom: 10px;
 padding: 15px;
 text-transform: uppercase;
 font-family: Arial, sans-serif;
 width: 85%;
 text-align: center;
`
export default function Nav({ franquia, link_url, name_select }) {
  const handleSelectChange = (event) => {
    const selectValue = event.target.value;

    if (selectValue) {
      window.location.href = selectValue;
    }
  };

  return (
    <ul style={{ paddingInlineStart: "0px", margin: "8px" }}>
      <li 
style={{ listStyle: 'none' }}>
        <ButtonList name="select" onChange={handleSelectChange}>
          <option selected disabled hidden>
            {name_select.name1}
          </option>
          <option value={link_url.link1}>{franquia.item1}</option>
          <option value={link_url.link1_1}>{franquia.item1_1}</option>
        </ButtonList>
      </li>

      <li 
style={{ listStyle: 'none' }}>
        <ButtonList name="select" onChange={handleSelectChange}>
          <option selected disabled hidden>{name_select.name2}</option>
          <option value={link_url.link2}>
            <center>
              {franquia.item2}
              <span style={{ textTransform: 'none' }}>{franquia.detailsItem}</span>
            </center>
          </option>
          <option></option>
        </ButtonList>
      </li>

      <li 
style={{ listStyle: 'none' }}>
        <ButtonList name="select" onChange={handleSelectChange}>
          <option selected disabled hidden>{name_select.name3}</option>
          <option style={{ textAlign: 'center' }} value={link_url.link3}>
            {franquia.item3}
            <span style={{ textTransform: 'none' }}>{franquia.detailsItem}</span>
          </option>
          <option></option>
        </ButtonList>
      </li>

      <li 
style={{ listStyle: 'none' }}>
        <ButtonList name="select" onChange={handleSelectChange}>
          <option selected disabled hidden>{name_select.name4}</option>
          <option value={link_url.link4}>
            {franquia.item4}
            <span style={{ textTransform: 'none' }}>{franquia.detailsItem}</span>
          </option>
          <option></option>
        </ButtonList>
      </li>

      <li 
style={{ listStyle: 'none' }}>
        <ButtonList name="select" onChange={handleSelectChange}>
          <option selected disabled hidden>{name_select.name5}</option>
          <option value={link_url.link5}>
            {franquia.item5}
            <span style={{ textTransform: 'none' }}>{franquia.detailsItem}</span>
          </option>
          <option></option>
        </ButtonList>
      </li>
    </ul>
  );
}
