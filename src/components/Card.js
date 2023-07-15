export default function Card (props) {
    return (
        <section>
            <img src={"%PUBLIC_URL%/images/" + props.item.imageURL} ></img>
            <div>{props.item.title}</div>
        </section>
    )
}