import './About.css';


const About = () => {
    return (
        <div className="about_wrapper">
            <header className='about_header'>
                <div className="about_header_container">
                    <a className="about_home" href="/">Home</a>
                    <div>Video Games Club</div>
                </div>
            </header>
            <main className='main_about'>
                <div className="about_main_container">
                    <section className="about_page"><span>About Page</span>
                        <div className="about_page_info">
                            <p>
                                This site was created as a hobby and personal use. It is intended for all people who
                                are passionate about video games.
                            </p>
                            <p>
                                On the site you can search for your favorite games and have information about them.
                            </p>
                            <p>
                                The site allows you to search by entering keywords, by platforms
                                (Xbox, PC, Nintendo and Playstation), and also by genres (you can select from
                                more than 20 genres!). You can also sort the search results according to
                                your preferences (Relevance, Name, Released Date, Popularity, Average Rating).</p>
                            <p>
                                Hope you enjoy it!!!
                            </p>
                        </div>
                    </section>

                    <section className="about_technoligies"><span>Technologies</span>
                        <div className="about_technologies_info">
                            <p>
                                This site was built using React JS. In addition, JSX, HTML, CSS, Bootstrap and Axios were used.
                            </p>
                            <div className='about_technologies_logos'>
                                <a href="https://react.dev/"><img className='img_logo' src="img/logos/react.png" alt='react logo' /></a>
                                <a href="https://react.dev/learn/writing-markup-with-jsx"><img className='img_logo' src="img/logos/jsx.png" alt='jsx logo' /></a>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img className='img_logo' src="img/logos/html.svg" alt='html logo' /></a>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img className='img_logo' src="img/logos/css.svg" alt='css logo' /></a>
                                <a href="https://axios-http.com/"><img className='img_logo' src="img/logos/axios.png" alt='axios logo' /></a>
                                <a href="https://getbootstrap.com/"><img className='img_logo' src="img/logos/bootstrap.svg" alt='bootstrap logo' /></a>
                            </div>
                            <p>
                                All data is pulled from the <strong><a href='https://rawg.io/apidocs'>RAWG Video Games Database API</a></strong> using Axios.
                            </p>

                        </div>
                    </section>

                    <section className="about_developers"><span>Developers Team</span>

                        <div className='about_developers_info'>
                            <div className='about_developer_avatar_name'>
                                <img className='about_avatar' src="img/avatar.jpg" alt="developer" />
                                <div className='developer_name'>José Muthuan</div>
                                <div className='developer_titles'>Full Stack Developer & Electronic Engineer</div>
                                <div className='developer_social_media'>
                                    <a href='https://www.linkedin.com/in/jos%C3%A9-muthuan/'><img src="img/logos/linkedin.svg" alt="link to linkedin" /></a>
                                    <a href='https://github.com/jmuthuan'><img src="img/logos/github.svg" alt="link to github" /></a>
                                </div>
                            </div>
                            <div className="about_developers_person">
                                <p>I am an Electronic Engineer with years of experience in industrial maintenance
                                    management. I always liked the programming environment: from programming microcontrollers in assembler,
                                    industrial PLCs in various languages, to software development. A few years ago I began to explore in
                                    languages like Java, mobile development with Android Studio and web development,
                                    always learning new tools, libraries and frameworks.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="about_contact"><span>Do you want to make contact?</span>
                        <form
                            className="about_contact_form"
                            name='contact_message'
                            action='https://formspree.io/f/xwkjnobg'
                            method='post'
                           >

                            <label className='form_item' htmlFor='input_name'>Name</label>
                            <input
                                className='form_item'
                                type="text"
                                name='name'
                                placeholder="Enter your full name"
                                id='input_name' 
                                required/>

                            <label className='form_item' htmlFor='input_email'>Email</label>
                            <input
                                className='form_item'
                                type="email"
                                name='email'
                                placeholder="Enter your email"
                                id='input_email'
                                required />

                            <label className='form_item' htmlFor='input_area'>Comments</label>
                            <textarea
                                className='form_item form_text_area'
                                id='input_area' 
                                maxLength={500}
                                required
                                name='comments'
                                placeholder='Feel free to contact me!'></textarea>

                            <button className='form_item btn_submit' type="submit">Send!</button>
                        </form>
                    </section>
                </div>
            </main >
            <footer className="footer">
                <div> Developed by: José Muthuan</div>
                <div>Copyright © {new Date().getFullYear()} - All Rights Reserved</div>
            </footer>
        </div >
    )
}

export default About;