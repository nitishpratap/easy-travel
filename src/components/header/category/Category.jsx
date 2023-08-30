import style from './category.module.css'
import {Text} from "../../../utils/texts/Text";
import {Images} from "../../../utils/constants";

export const Category = () => {
    class category {
        constructor(image, title, text) {
            this.image = image;
            this.title = title;
            this.text = text
        }
    }

    const services = [
        new category(Images.tourGuide, "Guided Tour", "sunt qui repellat saepe quo velit aperiam id aliquam placeat."),
        new category(Images.aeroplane, "Best Flights Options", "sunt qui repellat saepe quo velit aperiam id aliquam placeat."),
        new category(Images.namaste, "Religious Tour", "sunt qui repellat saepe quo velit aperiam id aliquam placeat."),
        new category(Images.medical, "Medical Insurance", "sunt qui repellat saepe quo velit aperiam id aliquam placeat."),
    ]

    return (
        <>
            <div className={style.category}>
                <Text text="Category" fontSize="18px" fontWeight={600} color="#DF6951"/>
                <Text text="We Offer Best Services" fontSize="35px" fontWeight={700} color="#181E4B" marginTop="10px"/>
                <div className={style.services}>
                    {services.map((category, key) => (
                        key === 1 ? (
                            <div className={style.container}>
                                <div className={style.secondCategory}>
                                    <Services imgSrc={category.image} heading={category.title} text={category.text} />
                                </div>
                                <div className={style.redBox}></div>
                            </div>
                        ) : (
                            <Services imgSrc={category.image} heading={category.title} text={category.text}/>
                        )
                    ))}

                </div>
            </div>
        </>
    )
}

const Services = (props) => {
    let {imgSrc, heading, text} = props
    return (
        <>
            <div style={{width: '12.5rem'}}>
                <img src={imgSrc} alt={""}/>
                <Text text={heading} fontSize="16px" fontWeight={600} marginTop='1rem' marginBottom='1rem'/>
                <Text text={text} fontSize="12px" fontWeight={500} color="#5E6282" margin = '0 1rem 2rem 1rem'/>
            </div>
        </>
    )
}
