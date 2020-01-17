import React from "react";
import defaultTheme from "../../theme/default";

class Icon extends React.PureComponent {
  render() {
    let color = this.props.fill;

    switch (this.props.format) {
      case "CSV":
      case "csv":
        if (!this.props.fill) {
          color = defaultTheme.csvIcon;
        }
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="dkan-icon"
            title="CSV"
            width={this.props.width}
            height={this.props.height}
            viewBox="0 0 126 126"
          >
            <path
              fill={color}
              d="M99.979 36.443a1.968 1.968 0 0 0-.475-1.295L79.838 12.683c-.006-.006-.012-.008-.016-.014a2.046 2.046 0 0 0-.924-.576c-.037-.012-.07-.027-.107-.037a2.002 2.002 0 0 0-.459-.056H30c-2.207 0-4 1.795-4 4v94c0 2.205 1.793 4 4 4h66c2.205 0 4-1.795 4-4V36.667c0-.076-.012-.15-.021-.224zm-54.442 67.348c1.654 0 3.49-.359 4.57-.791l.828 4.283c-1.008.504-3.275 1.045-6.227 1.045-8.387 0-12.707-5.221-12.707-12.131 0-8.279 5.904-12.887 13.246-12.887 2.844 0 5.004.576 5.977 1.08l-1.117 4.355c-1.115-.467-2.664-.898-4.607-.898-4.355 0-7.738 2.627-7.738 8.025 0 4.86 2.879 7.919 7.775 7.919zm14.94 4.537c-2.771 0-5.508-.721-6.875-1.477l1.115-4.535c1.477.756 3.744 1.512 6.084 1.512 2.52 0 3.852-1.045 3.852-2.629 0-1.512-1.152-2.375-4.068-3.418-4.031-1.404-6.658-3.635-6.658-7.162 0-4.141 3.455-7.309 9.178-7.309 2.736 0 4.752.576 6.191 1.225l-1.223 4.428a11.52 11.52 0 0 0-5.076-1.152c-2.375 0-3.527 1.08-3.527 2.34 0 1.549 1.367 2.232 4.5 3.42 4.283 1.584 6.299 3.814 6.299 7.234-.001 4.066-3.132 7.523-9.792 7.523zm25.63-.362h-6.406l-7.775-24.26h6.012l2.951 10.26c.828 2.879 1.584 5.65 2.16 8.674h.107a105.908 105.908 0 0 1 2.195-8.566l3.096-10.367h5.832l-8.172 24.259zM30 79.917V16h46.332v20.467a2 2 0 0 0 2 2H96v41.451H30z"
            />
            <path
              fill={color}
              d="M81.85 43.492H44.885V65.568h36.987V48.404h-.022v-4.912zm-24.715 21.65H45.313v-4.986h11.822v4.986zm0-5.412H45.313v-4.986h11.822v4.986zm0-5.414H45.313v-4.984h11.822v4.984zm.215-5.412V43.92h11.822v4.984H57.35zm24.021 16.164h-4.668V50.791h-3.205v14.277h-2.67v-11.32h-3.205v11.32h-2.352v-8.4h-3.205v8.4h-4.504V49.332h23.809v15.736zm.051-16.664h-.051v.5H69.6V43.92h11.822v4.484z"
            />
            ...
          </svg>
        );
        break;
      case "JSON":
      case "json":
        if (!this.props.fill) {
          color = defaultTheme.jsonIcon;
        }
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="dkan-icon"
            title="JSON"
            width={this.props.width}
            height={this.props.height}
            viewBox="0 0 126 126"
          >
            <path
              fill={color}
              d="M68.163 107.126c-5.545 0-8.791-4.64-8.791-10.539 0-6.208 3.578-10.849 9.096-10.849 5.74 0 8.872 4.764 8.872 10.479 0 6.792-3.716 10.909-9.177 10.909zm31.816-70.681a1.96 1.96 0 0 0-.475-1.295L79.838 12.686c-.006-.006-.012-.008-.016-.014a1.978 1.978 0 0 0-.529-.412 2.077 2.077 0 0 0-.395-.166c-.037-.01-.07-.025-.107-.035a2.003 2.003 0 0 0-.459-.057H30c-2.207 0-4 1.795-4 4v94c0 2.205 1.793 4 4 4h66c2.205 0 4-1.795 4-4V36.668c0-.074-.012-.148-.021-.223zM96 79.918H30V16.002h46.332v20.465a2 2 0 0 0 2 2H96v41.451zM40.229 99.199c0 6.175-2.67 8.328-6.963 8.328-1.015 0-2.35-.193-3.222-.513l.494-3.955c.61.224 1.393.385 2.262.385 1.857 0 3.019-.933 3.019-4.31V85.501h4.409v13.698zm55.772 7.851H91.46l-4.088-8.18c-1.136-2.266-2.383-5.002-3.32-7.486l-.086.031c.113 2.8.17 5.787.17 9.248v6.387h-3.974V85.848h5.053l3.973 7.771a64.4 64.4 0 0 1 3.122 7.267h.085c-.284-2.8-.368-5.662-.368-8.84V85.85H96v21.201h.001zm-46.942.314c-2.186 0-4.342-.629-5.421-1.289l.879-3.965c1.165.661 2.952 1.321 4.797 1.321 1.987 0 3.038-.912 3.038-2.296 0-1.32-.909-2.077-3.208-2.989-3.178-1.226-5.251-3.177-5.251-6.26 0-3.617 2.726-6.386 7.239-6.386 2.157 0 3.746.503 4.882 1.068l-.964 3.869a8.397 8.397 0 0 0-4.002-1.006c-1.873 0-2.783.943-2.783 2.045 0 1.352 1.079 1.949 3.549 2.988 3.378 1.384 4.967 3.334 4.967 6.322-.001 3.558-2.471 6.578-7.722 6.578zm19.297-17.907c-2.856 0-4.521 3.012-4.521 7.038 0 4.056 1.72 6.913 4.549 6.913 2.854 0 4.49-3.012 4.49-7.037.001-3.719-1.605-6.914-4.518-6.914zM41.162 57.382c-.301-4.876.751-7.929 1.688-9.632 1.316-2.396 3.266-4.315 5.5-5.536 1.684-1.035 3.556-1.595 5.487-1.595 1.131 0 2.282.189 3.423.562l.059.022c.17.079.337.162.502.249l.629.206-.129.071a11.59 11.59 0 0 1 4.269 4.362c1.119 1.995 1.707 4.336 1.699 6.771-.008 2.468-.62 4.855-1.77 6.901-.974 1.733-2.301 3.146-3.886 4.148a10.7 10.7 0 0 0 1.467.102c2.666 0 6.429-.991 9.213-5.709 1.629-2.759 2.462-5.738 2.494-8.885a19.236 19.236 0 0 0-.162-2.595c-.379-2.914-1.394-5.901-3.019-8.88-2.175-3.988-5.84-6.607-10.597-7.572l.009-.08a22.394 22.394 0 0 0-16.674 6.588 22.392 22.392 0 0 0-6.602 15.938 22.395 22.395 0 0 0 6.566 15.901 22.423 22.423 0 0 0 9.218 5.611 17.295 17.295 0 0 1-2.826-2.138 17.802 17.802 0 0 1-3.915-5.026c-.17-.304-.338-.618-.502-.943-1.138-2.265-1.939-5.57-2.141-8.841zm10.392 2.094c-1.226-2.119-1.865-4.494-1.848-6.868.03-4.312 2.199-8.122 5.999-10.623a9.622 9.622 0 0 0-1.783-.168c-1.719 0-3.455.469-5.068 1.359-1.714 1.069-3.219 2.685-4.348 4.738-1.253 2.28-1.922 5.5-1.882 9.067.035 3.198.655 6.446 1.659 8.688.152.341.312.667.478.983 1.141 2.028 2.425 3.559 3.652 4.704a16.527 16.527 0 0 0 3.844 2.582c1.079.517 2.773.996 5.036 1.425l-.008.08h.017c6.02 0 11.681-2.345 15.938-6.602s6.602-9.918 6.602-15.938a22.425 22.425 0 0 0-6.336-15.666 22.453 22.453 0 0 0-9.716-5.926c2.435 1.441 4.394 3.471 5.788 6.026 1.688 3.098 2.746 6.213 3.142 9.259.125.96.181 1.908.172 2.842-.02 3.366-.903 6.552-2.646 9.503-3.044 5.158-7.196 6.241-10.145 6.241-1.853 0-3.132-.437-3.186-.455l-.046-.015-.043-.024c-.109-.062-.216-.126-.323-.19l-.87-.302.233-.105a14.09 14.09 0 0 1-4.312-4.615z"
            />
          </svg>
        );
        break;
      case "PDF":
      case "pdf":
        if (!this.props.fill) {
          color = defaultTheme.pdfIcon;
        }
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="dkan-icon"
            title="PDF"
            width={this.props.width}
            height={this.props.height}
            viewBox="0 0 126 126"
          >
            <path
              fill={color}
              d="M61.508 88.796c-1.225 0-2.016.108-2.484.216v15.874c.469.108 1.225.108 1.908.108 4.967.035 8.207-2.699 8.207-8.495.035-5.04-2.916-7.703-7.631-7.703zM40.303 88.725c-1.115 0-1.871.107-2.268.215v7.164c.469.107 1.045.144 1.834.144 2.918 0 4.717-1.476 4.717-3.96 0-2.232-1.549-3.563-4.283-3.563z"
            />
            <path
              fill={color}
              d="M99.98 36.443a1.977 1.977 0 0 0-.475-1.295L79.838 12.684c-.004-.006-.012-.008-.016-.014a2 2 0 0 0-.396-.334c-.043-.028-.088-.053-.133-.078a2.02 2.02 0 0 0-.395-.165c-.035-.011-.07-.026-.107-.036a1.946 1.946 0 0 0-.457-.057H30c-2.205 0-4 1.795-4 4v94c0 2.206 1.795 4 4 4h66c2.205 0 4-1.794 4-4V36.667c0-.075-.012-.149-.02-.224zM47.789 97.902c-1.871 1.764-4.643 2.557-7.883 2.557-.719 0-1.369-.037-1.871-.108v8.675H32.6V85.088c1.691-.287 4.068-.504 7.416-.504 3.383 0 5.795.648 7.414 1.944 1.549 1.224 2.59 3.239 2.59 5.615s-.79 4.392-2.231 5.759zm23.147 8.244c-2.553 2.123-6.441 3.131-11.191 3.131-2.844 0-4.859-.18-6.229-.359v-23.83c2.016-.323 4.645-.504 7.416-.504 4.605 0 7.594.828 9.934 2.592 2.52 1.872 4.104 4.859 4.104 9.143-.001 4.644-1.693 7.847-4.034 9.827zm22.466-16.882h-9.324v5.543h8.711v4.464h-8.711v9.755h-5.506V84.765h14.83v4.499zM30 79.917V16h46.334v20.466a2 2 0 0 0 2 2H96l.002 41.451H30z"
            />
            <path
              fill={color}
              d="M83.52 54.988c-.117-.011-2.936-.268-7.262-.268-1.355 0-2.721.026-4.068.077-8.543-6.411-15.541-12.827-19.287-16.423.068-.396.115-.709.137-.949.494-5.216-.055-8.737-1.627-10.466-1.029-1.13-2.541-1.506-4.117-1.075-.979.256-2.791 1.206-3.371 3.139-.641 2.136.389 4.729 3.094 7.736.043.045.961 1.007 2.629 2.637-1.084 5.169-3.922 16.324-5.299 21.68-3.234 1.728-5.928 3.81-8.014 6.197l-.137.156-.088.188c-.215.451-1.242 2.794-.471 4.676.352.855 1.012 1.48 1.908 1.808l.24.065s.217.047.598.047c1.668 0 5.787-.877 7.996-9.017l.535-2.063c7.711-3.748 17.35-4.957 24.336-5.294a164.18 164.18 0 0 0 10.635 7.281l.113.066c.168.085 1.688.836 3.467.837 2.543 0 4.4-1.56 5.092-4.28l.035-.186c.193-1.554-.197-2.955-1.129-4.05-1.963-2.307-5.617-2.508-5.945-2.519zM38.447 71.212c-.016-.018-.023-.036-.031-.056-.166-.399.033-1.368.326-2.078 1.258-1.406 2.768-2.697 4.51-3.859-1.697 5.492-4.164 5.966-4.805 5.993zm10.772-36.491c-2.605-2.9-2.566-4.338-2.426-4.822.23-.809 1.268-1.115 1.277-1.118.523-.142.84-.114 1.123.196.639.702 1.188 2.821.971 6.707-.615-.618-.945-.963-.945-.963zM47.873 59.42l.045-.172-.006.002c1.305-5.11 3.186-12.592 4.268-17.398l.039.037.004-.023a221.37 221.37 0 0 0 15.293 13.131l-.073.003.107.08c-6.054.512-13.284 1.705-19.677 4.34zm39.754 1.676c-.461 1.694-1.348 1.926-2.16 1.926-.943 0-1.852-.393-2.059-.488a155.575 155.575 0 0 1-7.209-4.814h.059c4.176 0 6.957.253 7.066.261.697.026 2.904.352 3.855 1.47.374.438.516.962.448 1.645z"
            />
          </svg>
        );
        break;
      case "RDF":
      case "rdf":
        if (!this.props.fill) {
          color = defaultTheme.rdfIcon;
        }
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="dkan-icon"
            title="RDF"
            width={this.props.width}
            height={this.props.height}
            viewBox="0 0 126 126"
          >
            <path
              fill={color}
              d="M99.98 36.525a1.968 1.968 0 0 0-.477-1.295L79.838 12.766c-.004-.006-.01-.008-.016-.014a2 2 0 0 0-.527-.412 2.129 2.129 0 0 0-.395-.165c-.037-.011-.07-.026-.107-.036a2.017 2.017 0 0 0-.459-.057H30c-2.205 0-4 1.795-4 4v94c0 2.206 1.795 4 4 4h66c2.207 0 4-1.794 4-4V36.749c0-.075-.012-.149-.02-.224zm-51.335 71.153c-.359-.621-.883-2.418-1.535-5.129-.588-2.744-1.535-3.496-3.562-3.527h-1.503v8.656h-4.933V85.953c1.601-.262 3.985-.458 6.632-.458 3.267 0 5.554.489 7.121 1.731 1.308 1.045 2.026 2.58 2.026 4.604 0 2.812-1.993 4.735-3.888 5.423v.1c1.535.621 2.385 2.092 2.939 4.115.687 2.482 1.373 5.357 1.797 6.207l-5.094.003zm42.209-17.936h-8.461v5.031h7.906v4.051h-7.906v8.854h-4.998V85.659h13.459v4.083zM30 79.999V16.082h46.334v20.466a2 2 0 0 0 2 2H96l.002 41.451H30zm14.299 9.189c-1.208 0-1.895.1-2.254.164v6.075h1.961c2.482 0 3.953-1.241 3.953-3.169 0-2.026-1.373-3.038-3.66-3.07zm19.43-.211c-.97 0-1.597.101-1.966.196v14.407c.371.098.97.098 1.511.098 3.936.033 6.5-2.449 6.5-7.71.029-4.573-2.309-6.991-6.045-6.991zm7.47 15.748c-2.023 1.926-5.104 2.842-8.867 2.842-2.252 0-3.849-.164-4.932-.325v-21.63c1.597-.293 3.678-.457 5.872-.457 3.649 0 6.017.752 7.871 2.353 1.994 1.699 3.25 4.41 3.25 8.298 0 4.214-1.34 7.121-3.194 8.919zm3.942-37.196c-.039.318-.064.641-.119.957-.597 3.539-2.44 5.965-5.517 7.26-1.18.496-2.419.638-3.676.497-3.5-.392-6.371-3.035-7.32-6.733a9.945 9.945 0 0 1-.165-4.133.423.423 0 0 0-.052-.266c-2.122-3.267-4.955-5.38-8.556-6.231-.591-.14-1.197-.207-1.797-.292-.085-.012-.2.036-.269.099-1.272 1.164-2.726 1.906-4.375 2.114-2.942.373-5.439-.635-7.439-3.021-1.147-1.37-1.822-3.002-2.057-4.838-.56-4.389 1.783-8.605 5.66-10.003 2.965-1.07 5.7-.478 8.143 1.65a.535.535 0 0 0 .446.149c1.875-.209 3.656-.759 5.323-1.727 1.993-1.158 3.611-2.771 4.906-4.778a.473.473 0 0 0 .062-.301c-.723-4.083 1.309-8.345 4.79-10.052.938-.459 1.913-.746 2.939-.815.062-.004.123-.027.185-.042h.836c.065.015.134.033.201.045.528.098 1.073.132 1.582.3 3.438 1.144 5.494 3.655 6.153 7.51.053.303.076.611.113.917v.952c-.014.066-.035.131-.039.198a9.282 9.282 0 0 1-.684 3.008c-1 2.423-2.652 4.087-4.936 5.016a.375.375 0 0 0-.188.174c-1.13 2.654-1.576 5.433-1.254 8.344a16.808 16.808 0 0 0 1.216 4.623c.061.142.143.22.275.277 3.068 1.315 4.906 3.737 5.494 7.276.051.303.076.61.115.915.004.317.004.634.004.951zm-9.728-15.866c-.033-.509-.056-1.018-.099-1.525-.15-1.745-.603-3.399-1.272-4.987a.348.348 0 0 0-.167-.175 8.588 8.588 0 0 1-2.728-1.716.316.316 0 0 0-.238-.071c-.613.091-1.231.156-1.834.3-3.585.855-6.406 2.967-8.52 6.22a.42.42 0 0 0-.054.265 10.24 10.24 0 0 1 .001 3.369.418.418 0 0 0 .05.265 14.899 14.899 0 0 0 2.358 2.876c2.297 2.168 4.973 3.356 7.992 3.649a.383.383 0 0 0 .269-.094 8.7 8.7 0 0 1 2.679-1.687.392.392 0 0 0 .195-.196 16.813 16.813 0 0 0 1.368-6.493zm4.462 8.008c-2.167-1.274-5.811-1.358-8.517 1.55-2.568 2.759-2.756 6.731-1.455 9.402-.64-2.654-.194-5.055 1.385-7.205.816.753 1.618.467 2.036.032.554-.577.56-1.293.011-2.247a6.6 6.6 0 0 1 1.742-1.187c1.56-.724 3.161-.822 4.798-.345zM45.402 44.268c-2.504-1.415-6.096-1.141-8.577 1.606-2.678 2.965-2.587 6.946-1.409 9.321a8.512 8.512 0 0 1-.132-3.773 7.785 7.785 0 0 1 1.54-3.407c.288.312.629.472 1.013.476a1.33 1.33 0 0 0 1.023-.461c.214-.237.353-.522.394-.854a1.682 1.682 0 0 0-.423-1.369c1.968-1.717 4.154-2.206 6.571-1.539zM61.294 32.61c.301.303.638.479 1.034.479s.742-.156 1.021-.466c.534-.597.53-1.278-.019-2.228 1.957-1.71 4.148-2.194 6.572-1.52-2.521-1.451-6.482-1.175-9.031 2.128-.95 1.231-1.496 2.663-1.696 4.261-.231 1.847.306 3.88.735 4.556-.646-2.66-.196-5.052 1.384-7.21z"
            />
          </svg>
        );
        break;
      case "XML":
      case "xml":
        if (!this.props.fill) {
          color = defaultTheme.xmlIcon;
        }
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="dkan-icon"
            title="XML"
            width={this.props.width}
            height={this.props.height}
            viewBox="0 0 126 126"
          >
            <path
              fill={color}
              d="M99.979 36.442a1.968 1.968 0 0 0-.475-1.295L79.838 12.682c-.006-.005-.012-.008-.016-.013a1.978 1.978 0 0 0-.529-.412 2.011 2.011 0 0 0-.395-.165c-.037-.011-.07-.027-.107-.035a1.95 1.95 0 0 0-.459-.057H30c-2.207 0-4 1.794-4 4v94c0 2.205 1.793 4 4 4h66c2.205 0 4-1.795 4-4V36.666c0-.075-.012-.149-.021-.224zm-55.108 70.103l-1.977-3.95c-.809-1.521-1.326-2.653-1.941-3.917h-.064c-.453 1.264-1.004 2.396-1.684 3.917l-1.813 3.95h-5.631l6.311-11.039-6.084-10.778h5.664l1.908 3.981a69.266 69.266 0 0 1 1.652 3.625h.064c.518-1.391.938-2.361 1.488-3.625l1.846-3.981h5.631l-6.15 10.65 6.475 11.167h-5.695zm27.127 0l-.324-8.352c-.098-2.622-.195-5.794-.195-8.967h-.096a117.819 117.819 0 0 1-2.428 8.449l-2.654 8.513h-3.854l-2.33-8.448c-.711-2.557-1.455-5.664-1.975-8.514h-.064c-.129 2.946-.227 6.313-.389 9.031l-.387 8.287h-4.564l1.393-21.817h6.57l2.137 7.284c.68 2.523 1.359 5.242 1.844 7.799h.098c.615-2.523 1.359-5.404 2.072-7.832l2.33-7.251h6.441l1.197 21.817h-4.822zm22.24 0H80.609V84.728h4.953v17.675h8.676v4.142zM96 79.916H30V16h46.332v20.465a2 2 0 0 0 2 2H96v41.451z"
            />
            <path
              fill={color}
              d="M33.866 55.497L45.41 60.86v-2.549l-8.73-3.824v-.049l8.73-3.824v-2.549l-11.544 5.363zM81.783 50.614l8.924 3.824v.049l-8.924 3.824v2.549l11.544-5.291v-2.213l-11.544-5.291zM63.367 40.688c-7.607 0-13.774 6.167-13.774 13.774s6.167 13.774 13.774 13.774S77.14 62.069 77.14 54.462s-6.165-13.774-13.773-13.774zm5.177 5.467l.985-.659s-.414-1.061-.344-1.581c.239-.116 1.209.393 2.029 1.256-.552 2.054-1.847 1.809-1.847 1.809s-.947-.023-.823-.825zm-8.303 12.128c-.061.308-.432 1.049-.678 1.541-.246.493-.369.679-.679.925-.309.25-.492.679-.492.679l-.062 1.047s.121.865.306 1.174c.185.306-.66 2.143-.66 2.143-.536-.106-.834-.728-1.02-1.218-.186-.495-.431-.757-.369-1.311.062-.555-.479-.848-.662-1.156-.184-.312-.432-.741-.432-1.049 0-.309-.677-.741-.677-.741s-1.234-.555-1.419-.8c-.185-.247-.372-1.298-.432-1.727-.063-.43.184-1.54.184-1.54s.498-.374.185-.679c-.309-.308-.368-1.112-.368-1.112l-.556-.615s-.433-.617-.494-.926c-.062-.308 0-.493.062-.802.061-.31-.123-.863-.123-1.17 2.304-5.649 6.167-6.967 6.167-6.967l.309 1.292s-.678.186-1.046.064c-.372-.124-.559-.124-.559-.124l-.491.677s-.188.433-.249.68c-.061.247.123.615.123.615s.862.062.862-.184c0-.247-.121-.37-.121-.37l-.124-.432s.559-.309 2.034-.187c1.48.125.927 1.172 1.545 1.421.617.247-.496 1.109-.742 1.601-.246.494-.616-.617-.616-.617s.37-.427-.246-.554c-.617-.121-1.025 1.11-.713 1.05.307-.061.651.332.588.639-.062.309-.062.285-.37.962-.308.678-.978 1.18-.978 1.18s-.315-.192-.133.179c.189.369-.061 1.232-.061 1.479 0 .245-.74-.432-.861-1.05-.126-.613-.848-.079-1.094-.016-.247.063-.697-.107-.816-.413-.126-.31-1.237.615-1.546.799-.307.186-.182.68.309.433.493-.247.924-.062.802.434-.122.49-.614.185-.554.49.061.308.554.617.676 1.05.124.43 1.298.062 1.667-.124.369-.187 1.418-.37 1.54.124.128.494 1.297.676 1.728.798.433.124 1.296.186 1.791.679.491.495-.37 1.42-.435 1.729zm2.775-14.43c-.063.618-1.047 1.418-.924 1.667.124.249 0 1.303-.863.377-.864-.925-1.729-1.239-1.665-1.858.015-.123.893-.316.907-.532 1.308-1.216 3.396-.966 3.556-.678-.374.611-.949.407-1.011 1.024zm10.715 4.141c.833 1.431 2.052 5.247 1.602 5.929l-.498-.224H73.19l.985 1.153s.477.7 1.153.655c-.445 5.157-4.749 8.469-4.749 8.469-.657-.658-.328-1.231-.328-1.231l.185-.989.104-1.664s0-1.725-1.646-.906c-1.767.451-1.03.451-2.815.575-1.788.124-1.492-3.646-1.492-3.646 0-5.643 4.327-1.384 4.327-1.384 2.469 1.642 2.798-1.362 2.798-1.362l1.808-.655.164-.824-.263-1.149-2.627-1.084s-.253.854.421 1.903c0 0-.225 1.192-.778.884l-1.522-.765s-.512-.222-1.334.273c-.824.492-2.217-.024-2.217-.024s.112-.827.978-1.256l.707-.467s-.185-.844-.023-1.501c.162-.657.452-.082 1.109-.576.657-.491 1.11.966 2.096.802.985-.165.494-.329 1.153-.657.659-.329 1.151.657 1.151.657l1.313.164c0 .001-.205-1.485-.117-1.1z"
            />
          </svg>
        );
        break;
      case "ZIP":
      case "zip":
        if (!this.props.fill) {
          color = defaultTheme.zipIcon;
        }
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="dkan-icon"
            title="ZIP"
            width={this.props.width}
            height={this.props.height}
            viewBox="0 0 126 126"
          >
            <path
              fill={color}
              d="M99.98 36.443a1.977 1.977 0 0 0-.475-1.295L79.838 12.684c-.004-.006-.01-.008-.016-.014a2 2 0 0 0-.527-.412 2.129 2.129 0 0 0-.395-.165c-.037-.011-.07-.026-.107-.036a1.962 1.962 0 0 0-.459-.057H30c-2.205 0-4 1.795-4 4v94c0 2.206 1.795 4 4 4h66c2.207 0 4-1.794 4-4V36.667c0-.075-.012-.149-.02-.224zm-42.869 72.501H38.25v-2.952l11.555-16.629v-.145H39.33v-4.535h17.602v3.168l-11.303 16.414v.143h11.482v4.536zm8.967 0H60.57v-24.26h5.508v24.26zM86.02 97.822c-1.871 1.764-4.643 2.555-7.883 2.555-.721 0-1.367-.035-1.871-.107v8.675H70.83V85.008c1.691-.289 4.066-.504 7.414-.504 3.385 0 5.795.647 7.416 1.943 1.547 1.224 2.592 3.239 2.592 5.615 0 2.376-.793 4.392-2.232 5.76zM30 79.917V16h23.92v-.629h6.066V16h16.348v20.466a2 2 0 0 0 2 2H96l.002 41.451H30z"
            />
            <path
              fill={color}
              d="M78.533 88.643c-1.117 0-1.873.108-2.268.217v7.162c.467.108 1.043.145 1.836.145 2.914 0 4.715-1.477 4.715-3.959 0-2.233-1.548-3.565-4.283-3.565zM59.986 19.392h6.066v2.503h-6.066zM53.92 16h6.066v1.875H53.92zM53.92 23.138h6.066v2.503H53.92zM59.986 27.236h6.066v2.503h-6.066zM59.986 35.145h6.066v2.503h-6.066zM53.92 31.125h6.066v2.503H53.92zM59.986 39.692c-4.295 0-6.338 3.48-6.338 7.776L52.21 60.495a7.774 7.774 0 1 0 15.548 0l-1.434-13.027c.002-4.295-2.043-7.776-6.338-7.776zm2.577 25.165h-5.148V53.982h5.148v10.875z"
            />
          </svg>
        );
      default:
        if (!this.props.fill) {
          color = defaultTheme.dataIcon;
        }
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="dkan-icon"
            title="Data"
            width={this.props.width}
            height={this.props.height}
            viewBox="0 0 126 126"
          >
            <path
              fill={color}
              d="M37.729 88.977c-.969 0-1.597.101-1.967.196v14.407c.371.098.969.098 1.511.098 3.935.033 6.501-2.449 6.501-7.71.028-4.573-2.309-6.991-6.045-6.991zM57.978 89.042h-.058c-.286 1.308-.57 2.974-.884 4.247l-1.141 4.672h4.249l-1.197-4.672c-.344-1.307-.685-2.939-.969-4.247z"
            />
            <path
              fill={color}
              d="M100.98 36.443a1.968 1.968 0 0 0-.477-1.295L80.838 12.684c-.004-.006-.01-.008-.016-.014a2 2 0 0 0-.527-.412 2.129 2.129 0 0 0-.395-.165c-.037-.011-.07-.026-.107-.036a1.962 1.962 0 0 0-.459-.057H31c-2.205 0-4 1.795-4 4v94c0 2.206 1.795 4 4 4h66c2.207 0 4-1.794 4-4V36.667c0-.075-.012-.149-.02-.224zm-55.781 68.282c-2.023 1.926-5.104 2.842-8.867 2.842-2.252 0-3.849-.164-4.933-.325v-21.63c1.597-.293 3.678-.457 5.873-.457 3.65 0 6.017.752 7.87 2.353 1.996 1.699 3.25 4.41 3.25 8.298.001 4.214-1.34 7.121-3.193 8.919zm17.054 2.612l-1.482-5.651h-5.503l-1.368 5.651h-4.505l5.874-22.019h5.703l5.959 22.019h-4.678zm25.643-18.295h-.056c-.285 1.308-.568 2.974-.884 4.247l-1.142 4.672h4.248l-1.196-4.672c-.345-1.307-.684-2.939-.97-4.247zm4.277 18.295l-1.481-5.651h-5.504l-1.367 5.651h-4.504l5.871-22.019h5.703l5.959 22.019h-4.677zM80.447 89.5h-5.246v17.837h-4.363V89.5h-5.16v-4.182h14.771l-.002 4.182zM31 79.917V16h46.334v20.466a2 2 0 0 0 2 2H97l.002 41.451H31z"
            />
            <path
              fill={color}
              d="M68.203 54.434a5.111 5.111 0 0 1 2.854-2.792.317.317 0 0 0 .197-.289v-3.885a.33.33 0 0 0-.197-.296 5.117 5.117 0 0 1-2.854-2.79 5.13 5.13 0 0 1 .042-3.99.33.33 0 0 0-.063-.349l-2.748-2.747c-.15-.149-.268-.103-.353-.068a5.093 5.093 0 0 1-3.986.043 5.1 5.1 0 0 1-2.794-2.851.315.315 0 0 0-.29-.197h-3.884a.317.317 0 0 0-.293.197 5.11 5.11 0 0 1-2.789 2.851 5.096 5.096 0 0 1-3.994-.043c-.08-.031-.193-.081-.347.068l-2.75 2.747a.33.33 0 0 0-.066.352 5.087 5.087 0 0 1 .042 3.987 5.11 5.11 0 0 1-2.848 2.79.317.317 0 0 0-.204.296v3.885c0 .129.083.242.204.289a5.116 5.116 0 0 1 2.848 2.792 5.105 5.105 0 0 1-.042 3.994.32.32 0 0 0 .066.344l2.75 2.751c.154.15.264.101.347.063a5.067 5.067 0 0 1 3.988-.041 5.104 5.104 0 0 1 2.794 2.85.315.315 0 0 0 .293.198h3.884a.31.31 0 0 0 .29-.198 5.12 5.12 0 0 1 2.794-2.85 5.126 5.126 0 0 1 3.992.041c.083.038.193.084.348-.063l2.746-2.751a.315.315 0 0 0 .064-.344 5.135 5.135 0 0 1-.041-3.994zm-12.136 2.53c-4.17 0-7.553-3.389-7.553-7.558 0-4.163 3.383-7.558 7.553-7.558 4.168 0 7.557 3.395 7.557 7.558 0 4.169-3.389 7.558-7.557 7.558zM84.07 59.733a2.576 2.576 0 0 1-1.434-1.4 2.563 2.563 0 0 1 .021-2.004.166.166 0 0 0-.033-.176l-1.379-1.378c-.076-.076-.136-.052-.179-.034a2.553 2.553 0 0 1-3.402-1.41.155.155 0 0 0-.146-.1h-1.951a.157.157 0 0 0-.146.1 2.57 2.57 0 0 1-1.399 1.431 2.554 2.554 0 0 1-2.004-.021c-.041-.017-.099-.042-.176.034l-1.381 1.378a.16.16 0 0 0-.031.179c.279.632.283 1.361.021 2.001a2.567 2.567 0 0 1-1.429 1.4.16.16 0 0 0-.104.149v1.951c0 .064.041.121.104.145a2.554 2.554 0 0 1 1.408 3.406.164.164 0 0 0 .031.175l1.381 1.381c.078.074.135.051.176.029a2.531 2.531 0 0 1 1.024-.215 2.556 2.556 0 0 1 2.379 1.625c.021.061.083.1.146.1h1.951a.157.157 0 0 0 .146-.1 2.567 2.567 0 0 1 1.402-1.43 2.563 2.563 0 0 1 2.004.02c.041.021.099.043.175-.029l1.379-1.381a.16.16 0 0 0 .033-.175 2.555 2.555 0 0 1 1.413-3.406.157.157 0 0 0 .099-.145v-1.951a.17.17 0 0 0-.099-.149zm-7.526 4.917a3.796 3.796 0 0 1 0-7.59 3.798 3.798 0 0 1 3.793 3.795 3.796 3.796 0 0 1-3.793 3.795z"
            />
          </svg>
        );
        break;
    }
  }
}

export default Icon;

// Icons made by Freepik https://www.flaticon.com/authors/freepik
