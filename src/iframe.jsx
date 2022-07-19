import React from "react";
import { saveAs } from "file-saver";
// Downloade Button Start
const saveFile = () => {
  saveAs(
    "data:image/jpeg;base64,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",
    "example.png"
  );
};
// Downloade Button End

// Ifram Button State Changes and Toggle  Effect Logic
class iframe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      change: true,
    };
  }
  componentDidMount() {
    const { change } = this.state;
    this.setState({ change: change });
    console.log("Ifram", this.state.change);
  }
  iframeRow(e) {
    console.log("Iframe", e);
    if (e === true) {
      this.setState({ change: false });
    } else {
      this.setState({ change: true });
    }
  }
  render() {
    return (
      <>
        <div className="iframe">
          <button onClick={(e) => this.iframeRow(this.state.change)}>
            Click Here!
          </button>
          {this.state.change ? (
            <h1></h1>
          ) : (
            <iframe
              width="332"
              height="315"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH8AvwMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQIFBgQDB//EADkQAAEDAwIDBAgEBQUAAAAAAAEAAgMEBRESIQYxQRMiUWEUMkJxgZGhsSNSwdEHM3Lh8BVTYoLx/8QAGwEBAQADAQEBAAAAAAAAAAAAAAECBAUDBgf/xAAwEQACAQMDAwMCBQQDAAAAAAAAAQIDBBESIUEFMVETImFx0TKRocHwQoGx4RQjM//aAAwDAQACEQMRAD8A16/Lj6oEAIAQAgGAoQagGhBgIQeUAZCAEwAQAgAoBYQoigEqUSASpQQAgBACAEAIAQAgGAoBhQg8IQlhCCJwCSQABk5WUYObxFEbwEVyt8AJk/Ge32WjI+q+jten0qcc1FlmpUlOb9ux6DiW3S9z0MnyJGQt6UaElh01+SPFUqieVI8ZK2jlfmLVHnm145Lj3nTk/dQX9japTktpkwQRkHIXFnGUHiSwz3TyCxKCoBAIhAJCiVAihRKlBACAEAIAQAgGFAxqEJAIQYQhComZBC+WQ4YwZJWdKDqTUY92RsydffTLqe8lsTTlrB/m5X1Frbxox0x7nlLcpDdJ62oLR+FTgZLnDJJ6Y/stzSsbmKPeksl9u0gfQzup4mn+bJvq9zfBZxUeUHsO4VN3sVcKW4xx1EZZqbLG3SSM+CnpxayjHJcWu9l+lzHEsPRy0Lq3hWWH38mcXg1Eb2yRte3k4ZC+XnBwk4s9kySxKCgBUAQgIlCiVKRQoKgEAIAQAgBQDCEJBQhJCAgKjiWOaahZDT6QXPy7U7GwB28znC6vSqeqo34RjJmW/wBKElSx09fAzs93RNdksdjrtjmOmeS+jhHCPGWfBVVNS6WpBa5hcw9mwZPe3+6zUckbwsn0Th7iKjmtLpI4HRtp24e0HOPijWl4MMN75MtxjeWXOGKqgjZG6mfh7XSgu0EdRjbkFlFDBx0M4lp29lDpk1YBC8JxWT1Rvba1zaCAP9bQCc+e6+RupKVaTR6rsdK1zIFACAFQLCARQpEqlEqUEAIAQAgAKEJKEJBCDQDUBxPoxdKgMDXtMe7ZDjS7BwQOq+qsKHpUlHl7/wA+h4Tnp3MldrJJZq6ecCOWWpnZHSl7dTYs43IPM5+gXT22RE09yV3u8tO2J9DTUdVV0byyqqZaUOlOwLH7chguHlgLapOMl23NSrFqTy3hllwvxBSuoqmO52+ClfLgQshJZ24PUtdnA1EDPmdtlJQgnvyYp1Me3dIopb3Q3WpfBUWSnkbIBHUvNQ9joYhsS53IBoz0XooRymRuWGk+/wAHtZJ6Gtra2e2B8cHagQwzNx3AMA588Z+K0bjTrZtUtWhZNtSOe6FpeACV8ddOPqNRNtHutZlEoAQAoAVAihSKpSJQqBUAgBACAYUISChCQ5IQFACqB5tnNukbMx2IHuxKzOwz7Q8Cu90q9m5+jN5XH2NerTTWTurqelkibJKxrm8wXdDzByeRXe2PCMn2PjzrrT1HFVw7Bz4yZSGyA41Y7pIx7l6Sg4xUjOEtTcWXMNHdpaoaZHkZyyQ07XbebiVMwxuey042KjjK6CINtj5pZ3SOzJvnGOWR/nJZU9Uk22eFRRTSSOzhltNB6MyoByw5c5hy14PIb8iubcqctWl7nvHCWD6Q3GBjkvkn3PUkoBKAEKCgBUAUBFCkSqZISoBACAEBIKEGFCEuiEBACA86qNstO+JwyHjTj3rd6dBzuY443/I86jxEp+KZ5bbw3OZpXvMbPwmtHI9Mr67G6RrxfgwvDlBRO4XuNVI5rq3tGc+bACMY9+TutW6rVVeU4L8P+TOEYpZ5PU1d1jiEVNWysicQMAAkA7fqtpeTLg9H8OelGmlgp2TAEZa+TSZSeY1dOfNZObw0ngw05N3w3a7QbHM8YqI4pDqeWaezew+yTuRssHTU6bjPld/sedRzjNJFhTSRVFO2elfrhIG+kgt8iDyXyl1Y1KG73Xn7+DYhVUtn3JrRPUEAlCgoAQAqCJQpEqlEhQVAIAUBIIyDChCXRCAoAVBBjtU+PZZ919H0m30wdV89vp/s1q0uDP8AFt5lo3sZE5jdTSHFzNWfJdC4oxrJKXAox5MNQW2S41RNK4tY92XHGkfLwWwtlgSWWbWhscckUgkBODhpUDeDvslkhp62RtXLr7RhbGNRGM8z5HAVXhmLk1ujvvdSKWSktdJEIo8jDG7ZA558lZvhHnBZ9zLzJdAC04cB4LFpNYZit2cD3xOa0l0cUpH8vOA7HUfsuHf2NP8AHS2ffH2+x70pTTw9/wCckAQRtuuHg2RKYGQUKCgBUETzQoiqUihQVAIAUBIckIMKEJdEICgIyv0Rl3XoPErYtqLrVFDyYyeEecGGxZPM7lfZQiox0rsaj3ZnayM1VfKHAFoIa3I+a5l/VcZJI6FrHEWy0o6KOKEPDANt8BdJPKyab7nXA5rIzjl4LxuLmFCOZCMHJ4OB1Y+K8073+qTpwtSwuZVarcuTYrUUqOxZcVROi7G5xRansIjeW8w0nY+7911J7mlSx+FlnSuc+kBPPCnBi1h4PnHENfNDxG5glfpDQWtzsM89vgFq3ENcNzqW+yLqTBhiki7oe3VsVwFnU0z3W5k4r7W2vigR1FZM+kbNh0b3ktDHDz8M5+C7LtaVe0zGK1Nfqj0dGMqbwtz6Z5r5Z9zQQLEAqCJ5oURVKRQoKgEAICQUIMKEJdEICA4q6XMrYh7Iyu/0aj7ZVX9EeNV8HjLOGRbnfou23seSWWV9O5r6x+HAhv35fouBfNubZ06SxBYLmaeF1AIWHEh22HLzXvT6hGFulj3L+ZNV0Jeo3wSYwMiAGcea4tatOrPVN7nokkUF+cYnNmHOM5C37CWmSPdx1QaNjbahlbbYy/vMczSQvpU9jjSTiz2o2CNphPs7D3dFilwJPk+Y/wAR6Z1JxBTTtb3JYyMjxBH7rBrMWjoWzzHJa2ib0mzQv5ljiw+S+euYaaz+TbXc8rlwnSXW0V91Y+o9OgjOmNrm6HaRncYzy813em+6g/hmvO9nRrxp4Wl/z+bFtwlcBcrDSzF2ZGDspP6m7fbB+K+a6hQ9GvJLs9y1oaJtFytA8xFUEUKRKpRIUFQCAEAwoQkFCEghAQFJVTabtNG4EZaC0nqMD9cr6rpbi7VJd98/ma8/xHJ2j6qujp4d3Hf+keK2LmvGjDVIygint876eWRhJcWSObk9cErnV4qfu8nQh+FFq6rcZsDZoGVpqmsFZYit0taHO9YbLW9LfYmlFVe5HGMgjOVt2yWTPsjt4MuI9G9Fe/BYdK+gpSzE5dxDEzXQvEntYe3bK9DW7Ga/iTQ+kWVlW1uX00gc7HQHY/dYyRs2ksTwUHCMgdRVcHg4PA94x+i4d+sSjI6PJruGHB0lVA/dkjAcfQ/db/R5+6UTmdUj7YyXBjOCZXWviG42ObZut2jPVzTj6t+y8es2+aaqLj/B0qr9WlGqjdr5k1gKAihSJVMkJUAgBACAYUIMKMEghiNAc9ZRU9aGioYXFnqkOLSPiFsULmrQ/wDN4I0FHRU1CwspogwE5Jzkn4qVbipWeZvIwZK503o1yqQP93UPMO3XVpT104/Q2abzEHvwHH/iAokeh1vbrlY38uF4p6VkcEbq3LQDvtyVoPcpS0b5LdU9tkNa54C7FCrl6TXuKeqOTdW6u7YAsO7gt05zRX8X3hsdpqKWQZdMwsA96xk9j1oQ96MxwjKWXExnlLE4H3jB/dcq/jmlnwzos2djd2V1jH5wW/RYdKqabhLyat/DVQfwY/j5j7LxvBcogQ2QMm26kd1w+Q+q7t1SVSMoPlHp02fq2uh8bG+jkbLEySM5a9oc0+IK+DlFxbTPPtsMrEpFUpEoVAqAQAgBACgGEISChCSEBACAz/FEWHRygc2kE+7cLo2U8pxPai+6KY97QPzPYPqt2Pc9kWdvHayPkxsCtSs9KSK9iFTmafS0Zwsoe1ZZcFNxTB2dHob3dA1E5W7YSzUI1khwvfe0pyyZ2maI7E+0F23HDNCtRcXnghxNfGXh9PGwNzCSXub1PQLxqbHrb03HdnjZ39hX00nICQAn37FaNdaqckbDNvE/sa6J/wCWQH6rlWk9NWMvk860ddOUfKOP+LtF2tspa5jcmCbQ4+DXD9wPmvsaq2yc7o1XFVwfKFwHX+mcPxxOOX0x7I+7m36bfBfHdWo+nXcl2lv9zo3ENNT6miXLPEiVSiVKCAEAIAQAgGFAMKEGChCQQgIDiu9Kauicxvrt7zd/86LYtqnpzTZlCWmWTGsmiEUTpHtAa4EnPht912nTkm9ja5we0F3ZTmKnbPE1pBMj3OGCfAFYztJSTm0/grw2dQvdqo2u01PpU+MlsA1n4Y5rzhYXVd4UcL52MKk9Ky9kZ64cS0NxY6JkE5bJsS5unfw3K6NDptam1loqqx0a4ptfQytfXOlkMUcPYRDHcx3ifNdOFDQsyeWeHrOo9ux22s6mha1fY90XrGkMyBy3Wi3uZGzee0iilbuJGB2fguNjDcfBgi54hpv9X4Wqog3U+Sm1sHi4DI+oX2sJepSUvKPn6MvQuk/DPmv8ObgKe8vpHHu1bMD+puSPplcTrFHXb613j+/c+kuY5jlcH0sr5bBpEUMgVAIAQAgBACAEAwoBoQYKhCSEIygujc0cy04WUHhpg+XX4mpulTDJG2Kmgkf2cMbQCXE5c5x5kk9OWwX3dtUzb04rwjbs7WScq9R91t9F5KiGWKWjiL2ukDdbdTosFrT4Yyem46Lbl305JR3X/JnFdt2ts/24OuIwxXGpiNJTztb3HgnMbhjpjdp+xUnmlu8Ft3TvYShDVH5yJ9sa2jdOXmGEzaYWvfqMh6sHjgb5+qx1Oacktj1jpt6kLeVRyb8pfq8fkcd4oWtEAjZmX0dryRzyXuxn/qB9Fl/SsnhKlrrVPTW0Wv8Af3CzNyFzrkzSNCz1cLnspp7W/tLPDncx5b8Af2XNrrTWfyYcmpszhJbIs76ctPwK+p6dPXbR+Nj5++jpuH+Z8Xu0Ulh4pqBEN6WpL2Y2yM5b9CFatOM04S5Po7d+rbxk+UfWqaojq6aKogcDFKwPb7ivh6tOVObhLujUxwei8yggBACAEAIAQAgBAPKhBoBqEGChD5leLiyiu9xbSAtrzLI50pGrso8kHAOxe4gjwAX33T9KtacvhIs5VbjFDtGK1P5XBUMrRGx1HSamSuaDUVA9ZjXbhjPA4O7vkt14prPIzU6hV0fhhHv5LChpqSKilqp9TLfSAa2RDDnk7Bo8z4nkvCFN1JbnQurqFlRUaa3fZcfUTny3GsZNUtDTtFDDH6sDCfVb5+J6lY1qmr2R7FsbP0U69Xeb3fx8ff8ATY9KPFdfGyGMNY+oAZGfZjYdIB88Nz7ys5vNVR8HhaxcLCpWk/dLUyrtmjTDI3Z0zNbm9AfL5haV0tsoqk3jPKTLtnILmsyL3h5+qlqYvyuDvn/4tG8jiUZGD7ms4admmmj/ACv1fMf2Xb6PPNKS+f2OL1SP/ZF/H7lJxBwnT3DiMXGpd+AY2h0Q2L3Dbc+GMLHq15K2woLd8m1065lGhoXktYomQxtjhY1kbRhrWjAAXyU5Ob1Se5sE1iAQAgBAf//Z"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >
              {/* <div className="download">
                <button onClick={saveFile}>Download</button>
              </div> */}
            </iframe>
            // <iframe
            //   src="https://www.youtube.com/"
            //   frameborder="0"
            //   allow="autoplay; encrypted-media"
            //   allowfullscreen
            //   title="video"
            //   // width="540"
            //   // height="450"
            // ></iframe>
          )}
        </div>
        <div className="download">
          <button onClick={saveFile}>Download</button>
        </div>
        {/* <div>
      <a
        href="https://www.youtube.com/embed/5Eqb_-j3FDA"
        download
      ><button>
        Click to download
        </button>
      </a>
    </div> */}
      </>
    );
  }
}

export default iframe;
