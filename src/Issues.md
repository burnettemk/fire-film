- [1. Issues](#1-issues)
  - [1.1. Component Issues](#11-component-issues)
  - [1.2. Larger Concerns](#12-larger-concerns)
    - [1.2.1. Organization](#121-organization)
    - [1.2.2. MarkedPageSelector](#122-markedpageselector)
  - [1.3. For later](#13-for-later)

# 1. Issues

## 1.1. Component Issues

1. MovieGrid and TVGrid need to use different hooks, but I still want to use the same component.
2. The sort order selectors for movies and series are outdated and could use the drawer treatment or at least could be bundled together in one component
3. RatingList.tsx needs to convert the object it finds to JSON to extract all values from it through parsing

## 1.2. Larger Concerns

### 1.2.1. Organization

Currently the project seems to be well organized, however we still have multiple pending updates that have yet to be fully implemented and it's making the project folder messy.

### 1.2.2. MarkedPageSelector

Currently in order for the marked movie selector to find a movie or series based on the ID to get the poster path, it needs to use the hooks associated with each type of content. However, I currently do not know how to share the information gained from the hooks with other components.

With this component, we need to be able to get the following data:

```
responseData.data?.pages[0].results[0].poster_path
```

## 1.3. For later

Implement this into design, if desired, at a later date.

```
// Genre
 import { FaMasksTheater } from "react-icons/fa6";
 import { FaTheaterMasks } from "react-icons/fa";
 import { GiDualityMask } from "react-icons/gi";
 import { LiaTheaterMasksSolid } from "react-icons/lia";

// Year
 import { IoCalendar } from "react-icons/io5";
 import { IoCalendarNumberSharp } from "react-icons/io5";
 import { IoCalendarSharp } from "react-icons/io5";
 import { BsCalendar2DayFill } from "react-icons/bs";
 import { BsFillCalendarDayFill } from "react-icons/bs";
 import { LiaCalendarWeekSolid } from "react-icons/lia";
 import { LiaCalendar } from "react-icons/lia";

// Age Rating
 import { MdOutlineFamilyRestroom } from "react-icons/md";
 import { TbRating12Plus } from "react-icons/tb";
 import { TbRating14Plus } from "react-icons/tb";
 import { TbRating16Plus } from "react-icons/tb";
 import { TbRating21Plus } from "react-icons/tb";
 import { RiParentFill } from "react-icons/ri";

 // Language
 import { IoLanguageSharp } from "react-icons/io5";
 import { IoLanguage } from "react-icons/io5";

 // Keywords
 import { FaGuitar } from "react-icons/fa";
 import { GiGuitarBassHead } from "react-icons/gi";
 import { GiHighPunch } from "react-icons/gi";
 import { GiPunch } from "react-icons/gi";
 import { GiPunchBlast } from "react-icons/gi";
 import { ImPower } from "react-icons/im";
 import { GiSwordsPower } from "react-icons/gi";
 import { GiAncientSword } from "react-icons/gi";
 import { GiAnchor } from "react-icons/gi";
 import { GiAxeSword } from "react-icons/gi";
 import { GiAtom } from "react-icons/gi";
 import { MdScience } from "react-icons/md";

 // Favorite Movies
 import { FaFire } from "react-icons/fa";
 import { LiaFireSolid } from "react-icons/lia";
 import { LiaFireAltSolid } from "react-icons/lia";
 import { SiFireship } from "react-icons/si";
 import { ImFire } from "react-icons/im";
 import { HiMiniFire } from "react-icons/hi2";
 import { BsFire } from "react-icons/bs";

 // Hot Garbage
 import { LiaDumpsterFireSolid } from "react-icons/lia";
 import { FaDumpsterFire } from "react-icons/fa6";

 // Similarity Discovery or "Queried Discovery"
 import { IoIosMore } from "react-icons/io";
 import { FaMagnifyingGlass } from "react-icons/fa6";
 import { MdSavedSearch } from "react-icons/md";
 import { MdOutlineSavedSearch } from "react-icons/md";
 import { FaSearchPlus } from "react-icons/fa";
 import { FaSearchengin } from "react-icons/fa";
 import { GrSearchAdvanced } from "react-icons/gr";
 import { LiaSearchPlusSolid } from "react-icons/lia";
 import { PiMagnifyingGlassPlus } from "react-icons/pi";

 // Details
 import { FaPlus } from "react-icons/fa6";
 import { HiPlus } from "react-icons/hi2";
 import { TbListDetails } from "react-icons/tb";

 // Cast Query Discovery
 import { FaPeopleGroup } from "react-icons/fa6";

 // Similar Discovery
```
