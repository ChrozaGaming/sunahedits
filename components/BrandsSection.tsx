import React, { FC } from 'react';
import BrandItem from './BrandItem';

const BrandsSection: FC = () => {
    const brands = [
        { name: 'ZumarCons', image: 'assets/imgs/brands/ZumarCons.svg' },
        { name: 'Archin', image: 'assets/imgs/brands/archin.svg' },
        { name: 'Github', image: 'assets/imgs/brands/Github.svg', noDot: true },
        { name: 'BriskLabs', image: 'assets/imgs/brands/Brisklabs.svg' },
        { name: 'RogerArk', image: 'assets/imgs/brands/RogerArk.svg' },
        { name: 'Mathew Co', image: 'assets/imgs/brands/Mathew%20Coo.svg', noDot: true },
        { name: 'Udix', image: 'assets/imgs/brands/Udix.svg' },
        { name: 'ODA Group', image: 'assets/imgs/brands/ODA%20Group.svg', noDot: true }
    ];

    return (
        <div className="brands-mp">
            <div className="container section-padding bord-thin-top">
                <div className="text-center sec-head mb-20">
                    <h6 className="sub-head text-u opacity-5">
                        Partnered with 150+ Brands
                    </h6>
                </div>
                <div className="text-center">
                    {brands.map((brand, index) => (
                        <BrandItem
                            key={index}
                            name={brand.name}
                            image={brand.image}
                            noDot={brand.noDot}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandsSection;