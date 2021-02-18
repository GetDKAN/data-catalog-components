import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  className,
  containerClassName,
  headerClassName,
  headingClassName,
  bodyClassName,
  footerClassName,
  buttonClassName,
  headingText,
  bodyText,
  buttonText,
  media,
  cardVariant,
  mediaVariant,
  buttonAction,
  includeFooter,
  isCollection,
  mediaClassName,
  imageClassName,
}) => {

  let cardLayout;
  switch(cardVariant){
    case 'header-first':
      cardLayout = 'usa-card--header-first';
      break;
    case 'flag':
      cardLayout = 'usa-card--flag';
      break;
    case 'flag-right':
      cardLayout = 'usa-card--flag usa-card--media-right';
      break;
    default:
      cardLayout = '';
  }

  let mediaLayout;
  switch(mediaVariant){
    case 'inset':
      mediaLayout = 'usa-card__media--inset';
      break;
    case 'exdent':
      mediaLayout = 'usa-card__media--exdent';
      break;
    default:
      mediaLayout = '';
  }

  return (
    <li className={`${className} ${cardLayout}`}>
      <div className={`${containerClassName}`}>
        <header className={headerClassName}>
          {isCollection
            ?(
              <h3 className={headingClassName}>
                {headingText}
              </h3>
            )
            :(
              <h2 className={headingClassName}>
                {headingText}
              </h2>
            )
          }
        </header>
        {media
          &&(
            <div className={`${mediaClassName} ${mediaLayout}`}>
              <div className={imageClassName}>
                {media}
              </div>
            </div>
          )
        }
        {bodyText
          &&(
            <div className={bodyClassName}>
              {bodyText}
            </div>
          )
        }
        {includeFooter
          &&(
            <div className={footerClassName}>
              <button
                className={buttonClassName}
                onClick={buttonAction}
              >
                {buttonText}
              </button>
            </div>
          )
        }
      </div>
    </li>
  );
}

Card.defaultProps = {
  className: "usa-card",
  containerClassName: 'usa-card__container',
  headerClassName: 'usa-card__header',
  headingClassName: 'usa-card__heading',
  bodyClassName: 'usa-card__body',
  footerClassName: 'usa-card__footer',
  buttonClassName: 'usa-button',
  cardVariant: 'default',
  mediaVariant: 'default',
  mediaClassName: "usa-card__media",
  imageClassName: "usa-card__img",
  includeFooter: true,
  buttonAction: () => ({}),
}

Card.propTypes = {
  /**
   * This is the wrapper around the body content.
   */
  bodyClassName: PropTypes.string,
   /**
   * The body content can be any React renderable node. Pass an empty string to hide the body text field.
   */
  bodyText: PropTypes.node.isRequired,
  /**
   * The function that is fired on an onClick event.
   */
  buttonAction: PropTypes.func,
  /**
   * The class on the button element.
   */
  buttonClassName: PropTypes.string,
  /**
   * The content in the button. Can be any React renderable node.
   */
  buttonText: PropTypes.node,
  /**
   * This is the layout of the card, the options are from USWDS.
   */
  cardVariant: PropTypes.oneOf(['default', 'header-first', 'flag', 'flag-right']),
  /**
   * This is the base class for the entire card.
   */
  className: PropTypes.string,
  /**
   * This class wraps the content of the card.
   */
  containerClassName: PropTypes.string,
  /**
   * This class wraps the content card footer.
   */
  footerClassName: PropTypes.string,
  /**
   * This class wraps the content of the header.
   */
  headerClassName: PropTypes.string,
  /**
   * This class is on the card heading element.
   */
  headingClassName: PropTypes.string,
  /**
   * The heading content can be any React renderable node. Pass an empty string to hide the body text field.
   */
  headingText: PropTypes.node,
  /**
   * This class is on the actual media element that has been passed to the card.
   */
  imageClassName: PropTypes.string,
  /**
   * If no footer is included, there won't be a button on the card.
   */
  includeFooter: PropTypes.bool,
  /**
   * If the cards are part of a collection, this will change the h2 to an h3.
   */
  isCollection: PropTypes.string,
  /**
   * The media content can be any React renderable node.
   */
  media: PropTypes.node,
  /**
   * This class wraps the media content of the card.
   */
  mediaClassName: PropTypes.string,
  /**
   * This is the media option from the USWDS spec.
   */
  mediaVariant: PropTypes.oneOf(['default', 'exdent', 'inset']),
}

export default Card;
