import './Home.css'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/footer'

export default function Home() {
  return (
    <div>
      <>
        <div class="topContent">
          <div className="columnComponent">
            <Link to="/featured">
              <div className="iconWrapper">
                <img
                  src="https://media.istockphoto.com/id/470643888/photo/african-athlete-smiling-positively-after-a-good-training-session.jpg?s=612x612&w=0&k=20&c=mqEfE46hO8GMxoczsmFeOAUeK02s8g3wAfCX0Bx26-I="
                  alt=""
                />
              </div>
            </Link>

            {/* Icon 2 */}
            <Link to="/featured">
              <div className="iconWrapper">
                <img
                  src="https://media.istockphoto.com/id/470643888/photo/african-athlete-smiling-positively-after-a-good-training-session.jpg?s=612x612&w=0&k=20&c=mqEfE46hO8GMxoczsmFeOAUeK02s8g3wAfCX0Bx26-I="
                  alt=""
                />
              </div>
            </Link>

            {/* Icon 3 */}
            <Link to="/featured">
              <div className="iconWrapper">
                <img
                  src="https://media.istockphoto.com/id/470643888/photo/african-athlete-smiling-positively-after-a-good-training-session.jpg?s=612x612&w=0&k=20&c=mqEfE46hO8GMxoczsmFeOAUeK02s8g3wAfCX0Bx26-I="
                  alt=""
                />
              </div>
            </Link>
            <Link to="/featured">
              <div className="iconWrapper">
                <img
                  src="https://media.istockphoto.com/id/470643888/photo/african-athlete-smiling-positively-after-a-good-training-session.jpg?s=612x612&w=0&k=20&c=mqEfE46hO8GMxoczsmFeOAUeK02s8g3wAfCX0Bx26-I="
                  alt=""
                />
              </div>
            </Link>
            <Link to="/featured">
              <div className="iconWrapper">
                <img
                  src="https://media.istockphoto.com/id/470643888/photo/african-athlete-smiling-positively-after-a-good-training-session.jpg?s=612x612&w=0&k=20&c=mqEfE46hO8GMxoczsmFeOAUeK02s8g3wAfCX0Bx26-I="
                  alt=""
                />
              </div>
            </Link>
            <Link to="/featured">
              <div className="iconWrapper">
                <img
                  src="https://media.istockphoto.com/id/470643888/photo/african-athlete-smiling-positively-after-a-good-training-session.jpg?s=612x612&w=0&k=20&c=mqEfE46hO8GMxoczsmFeOAUeK02s8g3wAfCX0Bx26-I="
                  alt=""
                />
              </div>
            </Link>
            <Link to="/featured">
              <div className="iconWrapper">
                <img
                  src="https://media.istockphoto.com/id/470643888/photo/african-athlete-smiling-positively-after-a-good-training-session.jpg?s=612x612&w=0&k=20&c=mqEfE46hO8GMxoczsmFeOAUeK02s8g3wAfCX0Bx26-I="
                  alt=""
                />
              </div>
            </Link>
          </div>
        </div>
        <div class="centerPhoto">
          <div class="photoWrapper">
            <img
              className="photoAct"
              src="https://media.istockphoto.com/id/1382867793/photo/portrait-of-happy-fit-people-running-together-ourdoors-couple-sport-healthy-lifetsyle-concept.jpg?s=612x612&w=0&k=20&c=7Ii37tmJXH_08ojuhRk73FGTg2qtslO7AVm5OXv-yZQ="
              alt=""
            />
          </div>
        </div>
        <div class="scrollableContent">
          <div class="contentWrapper">
            <div class="contentCard"></div>
            <div class="contentCard"></div>
            <div class="contentCard"></div>
            <div class="contentCard"></div>
            <div class="contentCard"></div>
            <div class="contentCard"></div>
            <div class="contentCard"></div>
            <div class="contentCard"></div>
            <div class="contentCard"></div>
            <div class="contentCard"></div>
            <div class="contentCard"></div>
            <div class="contentCard"></div>
            <div class="contentCard"></div>
            <div class="contentCard"></div>
            <div class="contentCard"></div>
            <div class="contentCard"></div>
            <div class="contentCard"></div>
            <div class="contentCard"></div>
            <div class="contentCard"></div>
            <div class="contentCard"></div>
            <div class="contentCard"></div>
            <div class="contentCard"></div>
            <div class="contentCard"></div>
            <div class="contentCard"></div>
          </div>
        </div>
      </>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}
