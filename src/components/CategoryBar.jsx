import React, { useState } from "react";
import styled from "styled-components";
import CenterLayout from "./CenterLayout";

const categories = [
  {
    title: "SALE",
    list: [
      { name: "ALL SALE" },
      { name: "Up To 30% Off" },
      { name: "30 ~ 50% Off" },
      { name: "50 ~ 70% Off" },
      { name: "Over 70% Off" },
      { name: "Sale Tops" },
      { name: "Sale Outerwear" },
      { name: "Sale Pants" },
      { name: "Sale Dresses & Skirts" },
      { name: "Sale Bags" },
      { name: "Sale Hats" },
      { name: "Sale Shoes" },
      { name: "Sale Accessories" },
      { name: "Sale Jewelry" },
      { name: "Sale Beauty" },
    ],
  },
  {
    title: "BRANDS",
    list: [
      { name: "Rising Brands Edit", isNew: true },
      { name: "BRANDS A-Z" },
      { name: "TOP BRANDS" },
      { name: "MATIM KIM", isNew: true },
      { name: "AGAINST ALL ODDS" },
      { name: "AVANDRESS" },
      { name: "COVERNAT" },
      { name: "CPGN STUDIO" },
      { name: "DIMITRI BLACK" },
      { name: "LEMAIN SECOND" },
      { name: "LIKE THE MOST" },
      { name: "MUSINSA STANDARD" },
      { name: "STAND OIL" },
      { name: "thisisneverthat®" },
    ],
  },
  {
    title: "BEST SELLERS",
    list: [
      { name: "Best Items" },
      { name: "Best Brands" },
      { name: "Tops" },
      { name: "Outerwear" },
      { name: "Denim" },
      { name: "Pants" },
      { name: "Dresses & Skirts" },
      { name: "Swimwear & Beachwear" },
      { name: "Shoes" },
      { name: "Bags" },
      { name: "Eyewear" },
      { name: "Hats" },
      { name: "Jewelry" },
      { name: "K-BEAUTY" },
      { name: "#Short Down Jackets", isNew: true },
      { name: "#Hoodies", isNew: true },
      { name: "#Knitwear & Sweaters", isNew: true },
      { name: "#Track Pants & Joggers", isNew: true },
    ],
  },
  {
    title: "NEW IN",
    list: [
      { name: "ALL NEW This Week" },
      { name: "New Tops" },
      { name: "New Outerwear" },
      { name: "New Pants" },
      { name: "New Dresses & Skirts" },
      { name: "New Bags" },
      { name: "New Hats" },
    ],
  },
  {
    title: "CLOTHING",
    list: [
      { name: "ALL CLOTHING" },
      { name: "Tops" },
      { name: "Outerwear" },
      { name: "Pants" },
      { name: "Dresses & Skirts" },
      { name: "Underwear" },
      { name: "Socks & Legwear" },
      { name: "Jeans" },
      { name: "Track Pants & Joggers" },
      { name: "Knitwear & Sweaters" },
      { name: "Sweatshirts" },
      { name: "Hooded Jackets" },
      { name: "Short Down Jackets" },
    ],
  },
  {
    title: "BAGS",
    list: [
      { name: "ALL BAGS" },
      { name: "Shoulder Bags" },
      { name: "Messenger & Crossbody Bags" },
      { name: "Backpacks" },
      { name: "Totes" },
      { name: "Canvas Bags" },
      { name: "Travel Bags" },
      { name: "Belt Bags" },
      { name: "Wallets & Cases" },
      { name: "Pouches" },
      { name: "Sports Bags" },
      { name: "Clutches" },
      { name: "Bag Accessories" },
    ],
  },
  {
    title: "ACCESSORIES",
    list: [
      { name: "ALL ACCESSORIES" },
      { name: "Caps & Hats" },
      { name: "Belts" },
      { name: "Key Rings & Key Cases" },
      { name: "Fashion Accessories" },
      { name: "Necklace & Pendants" },
      { name: "Earrings" },
    ],
  },
  {
    title: "SHOES",
    list: [
      { name: "ALL SHOES" },
      { name: "Sneakers" },
      { name: "Oxfords & Brogues" },
      { name: "Loafers" },
      { name: "Boots" },
      { name: "Heels & Pumps" },
      { name: "Flats" },
      { name: "Sandals & Slippers" },
      { name: "Flip-flops" },
      { name: "Mules" },
      { name: "Sports Shoes" },
    ],
  },
  {
    title: "ACTIVE",
    list: [
      { name: "ALL ACTIVEWEAR" },
      { name: "Swimwear & Beachwear" },
      { name: "Sports Tops" },
      { name: "Sports Pants" },
      { name: "Sports Outerwear" },
      { name: "Sports Skirts" },
      { name: "Sports Bags" },
      { name: "Sports Hats" },
      { name: "Sports Gear" },
      { name: "Sporting Goods" },
      { name: "Sports Shoes" },
      { name: "Sports Dresses" },
    ],
  },
  {
    title: "BEAUTY",
    list: [
      { name: "ALL BEAUTY" },
      { name: "Skincare" },
      { name: "Sunscreens" },
      { name: "Cleansers" },
      { name: "Makeup" },
      { name: "Hair Care" },
      { name: "Body Care" },
      { name: "Hair Devices" },
      { name: "Fragrance" },
      { name: "Beauty Accessories" },
      { name: "FARMSTAY" },
      { name: "FORBEAUT" },
      { name: "HEIMISH" },
      { name: "JAVIN DE SEOUL" },
      { name: "LUVFUME" },
      { name: "MONCLOS" },
      { name: "MUSINSA STANDARD BEAUTY" },
      { name: "ODDTYPE" },
      { name: "SHHOM" },
      { name: "#MD's Best Picks", isNew: true },
    ],
  },
];

const CategoryBar = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(0);

  return (
    <Wrapper>
      <CenterLayout>
        <Bar>
          <Categories
            onMouseLeave={() => {
              setIsDropdown(false);
            }}
          >
            {categories.map((category, index) => (
              <Category
                onMouseEnter={() => {
                  setIsDropdown(true);
                  setCurrentCategory(index);
                }}
                isUnderline={index === currentCategory && isDropdown}
              >
                {category.title}
              </Category>
            ))}
          </Categories>
        </Bar>
      </CenterLayout>
      {isDropdown && (
        <Dropdown
          onMouseEnter={() => {
            setIsDropdown(true);
          }}
          onMouseLeave={() => {
            setIsDropdown(false);
          }}
        >
          <CenterLayout>
            <DropdownContent>
              {categories[currentCategory].list.map((category) => (
                <Subcategory>
                  <SubcategoryText>{category.name}</SubcategoryText>
                  {category.isNew && <SubcategoryNew>New</SubcategoryNew>}
                </Subcategory>
              ))}
            </DropdownContent>
          </CenterLayout>
          <Backdrop />
        </Dropdown>
      )}
    </Wrapper>
  );
};

export default CategoryBar;

const Wrapper = styled.div`
  position: relative;
`;

const Bar = styled.li`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 15px;
`;

const Categories = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
`;

const Category = styled.ul`
  z-index: 1;
  height: 100%;
  align-content: center;
  margin-left: 40px;
  cursor: pointer;
  &:first-child {
    margin-left: 0;
    color: ${(props) => props.theme.red01};
  }

  ${(props) =>
    props.isUnderline &&
    `border-bottom: 2px solid black;
    margin-bottom: -2px;
    height: calc(100% - 2px);`}
`;

const Dropdown = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  border-top: 1px solid ${(props) => props.theme.gray04};
  width: 100%;
  background-color: white;
`;

const DropdownContent = styled.div`
  display: flex;
  flex-direction: column;
  align-content: start;
  flex-wrap: wrap;
  z-index: 1;
  background-color: white;
  padding: 12px 15px 48px;
  height: 340px;
`;

const Subcategory = styled.div`
  display: flex;
  align-items: center;
  height: calc(100% / 7);
  width: 230px;
`;

const SubcategoryText = styled.div`
  font-size: 15px;
  color: ${(props) => props.theme.gray05};
  cursor: pointer;
`;

const SubcategoryNew = styled.div`
  font-size: 12px;
  font-weight: 100;
  color: ${(props) => props.theme.red01};
  cursor: pointer;
  transform: translate(4px, -10px);
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-color: rgba(50, 50, 50, 0.2);
`;
